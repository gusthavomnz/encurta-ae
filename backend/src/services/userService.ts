import { prisma } from "../config/database";
import { RegisterUser } from "../types/Auth";


export class UserService {


    async registerUser(userData: RegisterUser) {
        const { name, email, password } = userData;
        await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
         return "Registrou";
    }


};

