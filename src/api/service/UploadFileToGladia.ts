import { httpClientfactory } from '../utils/Got.js'
import { HTTPError } from 'got';
import { FormDataEncoder } from 'form-data-encoder';
import { FormData, File } from 'formdata-node';
import path from 'path';
import { Multipart } from '@fastify/multipart';



export async function uploadFileToGladia(url: string, api_key: string, file: Multipart ) {
   const formData = new FormData();
   formData.set('audio', file);
   console.log(formData.get('audio')?.toString())
   const client = httpClientfactory(api_key)
   const request = await client.post(url, {data: formData}).catch((err) => console.log(err.data))
   return request
}


