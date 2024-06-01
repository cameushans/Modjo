import * as fetch from 'node-fetch';
export function httpClientfactory(api_key) {
    const httpClient = new fetch.Headers({
        'Content-type': 'multipart/form-data',
        'x-gladia-key': '204e3d35-eed1-446f-b84e-8ef29e9519b7'
    });
    return httpClient;
}
