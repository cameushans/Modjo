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
        .register(import('@fastify/multipart'))
        .register(registerRoutes, { prefix: '/Modjo' });
}
export default serverFactory();
