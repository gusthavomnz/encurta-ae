import { useQuery } from "@tanstack/react-query";
import { generateQrCodeByLink } from "../services/linkService";


export function useCreateQrCode(linkEncurtadoCompleto: string){
    const query = useQuery ({
        queryFn: () => generateQrCodeByLink(linkEncurtadoCompleto),
        queryKey: ['generate-qr'],
        retry: 2,
        enabled: false,
    })

    return query;
}