import { prisma } from "../config/database";
import { AuthTypes} from "../types/Auth";


export class UserService {


    async registerUser(userData: AuthTypes.RegisterUser) {
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

