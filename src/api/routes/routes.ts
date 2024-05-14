
import {
    FastifyInstance,
    FastifyRequest,
    FastifyReply
  } from 'fastify'
import { handleDownload } from '../controllers/UploadHere.js'

export async function registerRoutes(server: FastifyInstance): Promise<void> {
   await server.post("/upload", (req: FastifyRequest, res: FastifyReply) => handleDownload(req,res))
   await server.get('/transcript', (req: FastifyRequest, res: FastifyReply) => handleDownload(req,res))
}