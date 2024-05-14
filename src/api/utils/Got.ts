import axios, { Axios } from 'axios'
import * as path from 'node:path'

export function httpClientfactory(api_key: string): Axios {
    const httpClient: Axios = axios.create({
        headers: {
            'x-gladia-key': api_key        },
    })

    return httpClient
}
