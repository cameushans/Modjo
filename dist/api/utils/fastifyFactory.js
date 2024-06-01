import fastify from 'fastify';
import { registerRoutes } from '../routes/routes.js';
function serverFactory() {
    return fastify.fastify({
        logger: {
            transport: {
                target: 'pino-pretty',
            },
        },
        ignoreTrailingSlash: true,
        ignoreDuplicateSlashes: true
    })
        .register(import('@fastify/multipart'), {
        limits: {
            fieldNameSize: 1000,
            fieldSize: Infinity,
            fields: Infinity,
            fileSize: Infinity,
            files: Infinity,
            headerPairs: 2000,
            parts: Infinity,
        }
    })
        .register(registerRoutes, { prefix: '/Modjo' });
}
export default serverFactory();
