import { useMutation } from "@tanstack/react-query";
import { fetchLoginRequest } from "../services/authService";

export function useLoginData() {
    const mutation = useMutation({
        mutationFn: fetchLoginRequest,
    });

    console.log("passou aqui em useLoginData");

    return mutation;
}