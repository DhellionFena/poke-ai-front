import { httpClient } from "../API/client"


export const getHello = async () => {
    return await httpClient('/hello', {method: 'GET'});
}