import { useQuery } from "@tanstack/react-query";
import { generateQrCodeByLink } from "../services/linkService";


export function useCreateQrCode(linkEncurtadoCompleto: string){
    const query = useQuery ({
        queryFn: () => generateQrCodeByLink(linkEncurtadoCompleto),
        queryKey: ['generate-qr',linkEncurtadoCompleto],
        retry: 2,
        enabled: !!linkEncurtadoCompleto,
    })
    console.log(query)
    return query;
}