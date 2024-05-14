import axios from 'axios';
export function httpClientfactory(api_key) {
    const httpClient = axios.create({
        headers: {
            'x-gladia-key': api_key
        },
    });
    return httpClient;
}
