import api from "./api";
import type { createLinkRequest } from "../types/Link";
import type { allLinkRequest } from "../types/Link";
import type { updateDateLinkRequest } from "../types/Link";
import type { deleteLinkRequest } from "../types/Link";

export const fetchAllLinksUser = async (): Promise<allLinkRequest> => {
    const response = await api.get('/allLinks')
    return response.data;
}

export const postLink = async(data: createLinkRequest): Promise<any> => {
    const response = await api.post('/encurtar', data)
    return response.data;
}

export const searchOriginalLink = async(urlEncurtada: string): Promise<any> => {
    const response = await api.get('/' + urlEncurtada)
    return response.data;
}

export const generateQrCodeByLink = async(urlCompleta: string): Promise<string> => {
    const response = await api.post('/qrcode', {url: urlCompleta})
    return response.data.qrCode;
}

export const editExpiresLink = async(data: updateDateLinkRequest): Promise<any> => {
 const response = await api.put('/alterarData', data)
 return response.data;
}

export const deleteLink = async(data: deleteLinkRequest): Promise<boolean> => {
const response = await api.delete('/delete', { data })
return response.data.ifDelete;
}
