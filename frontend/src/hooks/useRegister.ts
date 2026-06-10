import { useMutation } from "@tanstack/react-query";
import { fetchRegisterRequest } from "../services/authService";



export function useRegister(){
    const mutation = useMutation({
        mutationFn: fetchRegisterRequest

    });
    return mutation;
}