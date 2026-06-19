import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLink } from "../services/linkService";

export function useCreateLink() {

  const queryClient = useQueryClient();


      const mutation = useMutation ({
        mutationFn: postLink,
      onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['card-links'] })
        }});

    return mutation;
}