import { prisma } from "../config/database";
import { RegisterUserRequest } from "../types/Auth";
import { RegisterUserResponse } from "../types/Auth";
import { LoginUserRequest } from "../types/Auth";
import { LoginUserResponse } from "../types/Auth"
import { alterarSenhaRequest } from "../types/Auth";
import { alterarNomeRequest } from "../types/Auth";

export class UserService {

    async registerUser(userData: RegisterUserRequest) {
        const { name, email, password } = userData;
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });

        const registerUserResponse: RegisterUserResponse = {
            userId: newUser.id
        }
        return registerUserResponse;
    }

    async loginUser(req: LoginUserRequest){
        const {email, password} = req;
        const userLogado = await prisma.user.findFirst({
            where:{
                email: req.email,
                password: req.password
            }
        })

        const loginResponse: LoginUserResponse = {
            userId: userLogado.id,
            name: userLogado.name
        }

        return loginResponse;
    }

    async alterarSenha(data: alterarSenhaRequest){
        try {
            const resultado = await prisma.user.updateMany({
                where: {
                    id: data.userId,
                    password: data.senhaAntiga
                },
                data: {
                    password: data.novaSenha
                }
            });

            return resultado.count > 0;

        } catch(error){
            return false;
        }
    }

    async alterarNome(data: alterarNomeRequest) {
        const user = await prisma.user.findUnique({ where: { id: data.userId } });
        if (!user) {
            return { ok: false, error: "Usuário não encontrado." };
        }

        const ultimaMudanca = await prisma.userChangeLog.findFirst({
            where: { userId: data.userId, type: "NAME" },
            orderBy: { changedAt: "desc" },
        });

        if (ultimaMudanca) {
            const diasPassados = (Date.now() - ultimaMudanca.changedAt.getTime()) / (1000 * 60 * 60 * 24);
            if (diasPassados < 30) {
                const diasRestantes = Math.ceil(30 - diasPassados);
                return { ok: false, error: `Você só pode alterar o nome a cada 30 dias. Faltam ${diasRestantes} dia(s).` };
            }
        }

        await prisma.$transaction([
            prisma.user.update({
                where: { id: data.userId },
                data: { name: data.novoNome },
            }),
            prisma.userChangeLog.create({
                data: {
                    userId: data.userId,
                    type: "NAME",
                    oldValue: user.name,
                    newValue: data.novoNome,
                },
            }),
        ]);

        return { ok: true };
    }
}
