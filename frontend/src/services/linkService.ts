import axios from "axios";
import type { createLinkRequest } from "../types/Link";
import type { allLinkRequest } from "../types/Link";

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
