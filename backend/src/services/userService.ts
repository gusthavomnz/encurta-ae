import { prisma } from "../config/database";
import { RegisterUserRequest } from "../types/Auth";
import { RegisterUserResponse } from "../types/Auth";
import { LoginUserRequest } from "../types/Auth";
import { LoginUserResponse } from "../types/Auth"
import { alterarSenhaRequest } from "../types/Auth";

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
}
