import axios from "axios"
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { LoginUserRequest, LoginUserResponse } from '../types/Auth';

const API_URL = 'http://localhost:3333';

export const fetchAllLinksUser = async (userId: string): Promise<any> => {
    const response = await axios.get(API_URL + '/allLinks/' + userId)
    return response.data;
}






export const fetchData = async(data: LoginUserRequest): Promise<LoginUserResponse> => {
    const response = await axios.post(API_URL + '/login', data)
    return response.data;
}



export function useLoginData(){
    const navigate = useNavigate();
    const mutation = useMutation({
        mutationFn: fetchData,
        onSuccess: (data) => {
            localStorage.setItem('userId', data.userId);
            navigate('/home');
        }
    })
    return mutation;
}


