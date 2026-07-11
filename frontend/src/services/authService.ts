import api from "./api";
import type { LoginUserRequest } from "../types/Auth";
import type { LoginUserResponse } from "../types/Auth";
import type { RegisterUserRequest } from "../types/Auth";
import type { RegisterUserResponse } from "../types/Auth";
import type { alterarSenhaRequest } from "../types/Auth";

export const fetchLoginRequest = async(data: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await api.post('/login', data)
    return response.data;
}

export const fetchRegisterRequest = async(data: RegisterUserRequest): Promise<RegisterUserResponse> => {
    const response = await api.post('/registrar', data)
    return response.data;
}

export const fetchAlterarSenhaRequest = async(data: alterarSenhaRequest): Promise<any> => {
    const response = await api.put('/alterarSenha', data)
    return response.data;
}


export const fetchAlterarNomeRequest = async(data: any): Promise<any> => {
    const response = await api.put('/alterarNome', data)
    return response.data;
}

export const fetchUsuarioRequest = async(): Promise<{ userId: string, name: string, email: string }> => {
    const response = await api.get('/usuario')
    return response.data;
}
