


export interface UploadResponse {
    audio_url: string
    audio_metadata: AudioMetadata
  }

interface AudioMetadata {
    id: string
    filename: string
    extension: string
    size: number
    audio_duration: number
    number_of_channels: number
  }