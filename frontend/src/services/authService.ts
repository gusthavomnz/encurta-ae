import api from "./api";
import type { LoginUserRequest } from "../types/Auth";
import type { LoginUserResponse } from "../types/Auth";
import type { RegisterUserRequest } from "../types/Auth";
import type { RegisterUserResponse } from "../types/Auth";

export const fetchLoginRequest = async(data: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await api.post('/login', data)
    return response.data;
}

export const fetchRegisterRequest = async(data: RegisterUserRequest): Promise<RegisterUserResponse> => {
    const response = await api.post('/registrar', data)
    return response.data;
}
