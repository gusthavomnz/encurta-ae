import { useQuery } from "@tanstack/react-query";
import { fetchAllLinksUser } from "../services/linkService";


export function useListAllLinks(userId: string){
   const query = useQuery({
    queryFn: () => fetchAllLinksUser(userId),
    queryKey: ['card-links', userId],
    retry: 2,
    enabled: !!userId
   })
   return {
    ...query,
    data: query.data
   }
   
}