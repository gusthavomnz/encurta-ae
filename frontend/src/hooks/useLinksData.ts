import axios from "axios"

const API_URL = 'http://localhost:8080';

export const fetchAllLinksUser = async (userId: string): Promise<any> => {

    const response = await axios.get(API_URL + '//allLinks/' + userId)

    return response.data;
}


