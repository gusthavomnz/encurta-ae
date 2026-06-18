import axios from "axios";
import type { createLinkRequest } from "../types/Link";
import type { allLinkRequest } from "../types/Link";
import type { updateDateLinkRequest } from "../types/Link";
import type { deleteLinkRequest } from "../types/Link";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllLinksUser = async (userId: string): Promise<allLinkRequest> => {
    const response = await axios.get(API_URL + '/allLinks/' + userId)
    return response.data;
}

export const postLink = async(data: createLinkRequest): Promise<any> => {
    const response = await axios.post(API_URL + '/encurtar', data)
    return response.data;
}


export const searchOriginalLink = async(code: string): Promise<any> => {
    const response = await axios.get(API_URL + '/' + code)
    return response.data;
}

export const generateQrCodeByLink = async(urlCompleta: string): Promise<string> => {
    const response = await axios.post(API_URL + '/qrcode', {url: urlCompleta})
    return response.data;
}

export const editExpiresLink = async(data: updateDateLinkRequest): Promise<any> => {
 const response = await axios.put(API_URL + '/alterarData', data)
 return response.data;
}


export const deleteLink = async(data: deleteLinkRequest): Promise<boolean> => {
const response = await axios.delete(API_URL + '/delete', { data })
return response.data.ifDelete;
}
