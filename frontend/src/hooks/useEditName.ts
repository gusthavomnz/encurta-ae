import   {useMutation} from "@tanstack/react-query";
import { alterarNomeRequest } from "../types/Auth";
import { fetchAlterarNomeRequest } from "../services/authService";


export function useEditName() {
  return useMutation({
    mutationFn: (data: alterarNomeRequest) => fetchAlterarNomeRequest(data),    
  });
}
