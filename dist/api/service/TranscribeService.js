export {};
/* import { Got } from 'got'
import { httpClientfactory } from '../utils/Got.js'
import { ContentType } from '../models/ContentType.js'
import { TranscriptionResponse } from '../models/TranscriptPostDat.js'


async function transcribeService(httpClient: Got, url: string, content_type: ContentType, api_key: string, audio_id: string) {
    const client =  httpClientfactory(api_key, content_type)
    client.post(url)
/* curl --request POST \
  --url https://api.gladia.io/v2/transcription \
  --header 'Content-Type: application/json' \
  --header 'x-gladia-key: YOUR_GLADIA_API_TOKEN' \
  --data '{
  "audio_url": "YOUR_AUDIO_LINK_URL"
  }'
*/
