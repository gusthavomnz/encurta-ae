import axios from "axios";
import type { LoginUserRequest } from "../types/Auth";
import type { LoginUserResponse } from "../types/Auth";

const API_URL = import.meta.env.VITE_API_URL;


export const fetchLoginRequest = async(data: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await axios.post(API_URL + '/login', data)
    return response.data;
}
