import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLink } from "../services/linkService";
import type { deleteLinkRequest } from "../types/Link";


export function useDeleteLink() {

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (data: deleteLinkRequest) => deleteLink(data),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['card-links'] });
        }
    });
    console.log('passou no hook')

    return mutation;
}