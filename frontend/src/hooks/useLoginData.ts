import { useMutation } from "@tanstack/react-query";
import { fetchLoginRequest } from "../services/authService";

export function useLogin() {
    const mutation = useMutation({
        mutationFn: fetchLoginRequest,
    });
    return mutation;
}