import server from './utils/fastifyFactory.js'
import dotenv from 'dotenv';
import process from 'node:process'
import { configBuilder } from './utils/config.js';
import { logger } from "./utils/logger.js"


async function main(){
    dotenv.config()
    const config = configBuilder({port: process.env.PORT as string, host: process.env.HOST as string, api_key: process.env.API_KEY as string, api_url: process.env.API_URL as string })
    server.listen({port: config.port, host: process.env.HOST})
}

main()
.then((r) => logger.info(r))
.catch((err) => logger.error(err))
