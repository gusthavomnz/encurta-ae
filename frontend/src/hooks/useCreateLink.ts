import { useMutation } from "@tanstack/react-query";
import { postLink } from "../services/linkService";

export function useCreateLink() {
      const mutation = useMutation ({
        mutationFn: postLink
      })
    return mutation;
}