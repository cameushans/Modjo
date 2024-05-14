import fastify, { FastifyInstance } from 'fastify';
import { handleDownload } from '../controllers/UploadHere.js';
import { registerRoutes } from '../routes/routes.js';

function serverFactory(): FastifyInstance {
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
    .register(registerRoutes, { prefix: '/Modjo' })  
}

export default serverFactory()