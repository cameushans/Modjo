import server from './utils/fastifyFactory.js';
import dotenv from 'dotenv';
import process from 'node:process';
import { configBuilder } from './utils/config.js';
import { logger } from "./utils/logger.js";
async function main() {
    dotenv.config();
    const config = configBuilder({ port: process.env.PORT, host: process.env.HOST, api_key: process.env.API_KEY, api_url: process.env.API_URL });
    server.listen({ port: config.port, host: process.env.HOST });
}
main()
    .then((r) => logger.info(r))
    .catch((err) => logger.error(err));
