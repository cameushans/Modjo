import { httpClientfactory } from '../utils/Got.js';
import { FormData } from 'formdata-node';
export async function uploadFileToGladia(url, api_key, file) {
    const formData = new FormData();
    formData.set('audio', file);
    console.log(formData.get('audio')?.toString());
    const client = httpClientfactory(api_key);
    const request = await client.post(url, { data: formData }).catch((err) => console.log(err.data));
    return request;
}
