import { useMutation, useQueryClient } from "@tanstack/react-query";
import { alterarSenhaRequest } from "../types/Auth";
import { fetchAlterarSenhaRequest } from "../services/authService";

export function useEditPassword(data: alterarSenhaRequest) {

  return useMutation({
    mutationFn: (data: alterarSenhaRequest) => fetchAlterarSenhaRequest(data),    
  });
}