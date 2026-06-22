import { useQuery } from "@tanstack/react-query";
import { fetchAllLinksUser } from "../services/linkService";

export function useListAllLinks(){
   const query = useQuery({
    queryFn: () => fetchAllLinksUser(),
    queryKey: ['card-links'],
    retry: 2
   })
   return {
    ...query,
    data: query.data
   }
   
}
