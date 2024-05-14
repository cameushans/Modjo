import { string } from "io-ts"

interface TranscribeData {
  audio_url: string,
  diarization: true,
  diarization_config: {
    number_of_speakers: number,
    min_speakers: number,
    max_speakers: number
  },
  translation: boolean,
  translation_config: {
    model: string,
    target_languages: string[]
  },
  subtitles: boolean,
  subtitles_config: {
    formats: string[]
  },
  detect_language: boolean,
  enable_code_switching: boolean
  }

  export interface TranscriptionResponse {
    id: string
    result_url: string
  }