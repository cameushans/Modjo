
import { Iconfig } from "../models/Config.js"

type Input = { [Property in keyof Iconfig]: string }

export function configBuilder(input: Input): Iconfig {
    for (const [key, value] of Object.entries(input)) {
      if(value === undefined) throw (`Please provide the missing value for ${key}`)}

 return {
    port: parseInt(input.port), 
    api_key: input.api_key,
    api_url: input.api_url,
    host: input.host
   }
}