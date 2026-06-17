import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editExpiresLink } from "../services/linkService";
import type { updateDateLinkRequest } from "../types/Link";

export function useEditData() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: updateDateLinkRequest) => editExpiresLink(data),    
  });
}