import { prisma } from "../config/database";
import { RegisterUserRequest } from "../types/Auth";
import { RegisterUserResponse } from "../types/Auth";


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
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
        return registerUserResponse;
}

}

