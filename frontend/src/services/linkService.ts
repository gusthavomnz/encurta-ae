import axios from "axios";
import type { createLinkRequest } from "../types/Link";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchAllLinksUser = async (userId: string): Promise<any> => {
    const response = await axios.get(API_URL + '/allLinks/' + userId)
    return response.data;
}

export const postLink = async(data: createLinkRequest): Promise<any> => {
    console.log('entrou em postlnk')
    console.log(data.expiresAt)
    const response = await axios.post(API_URL + '/encurtar', data)
    console.log('saiu do await')
    return response.data;
}
