import { FastifyReply, FastifyRequest } from "fastify";
import { uploadFileToGladia } from "../service/UploadFileToGladia.js";
import { MultipartFile } from "@fastify/multipart";

export async function handleDownload(req: FastifyRequest, reply: FastifyReply){
    const files = await req.file()
    const file = files
    const u = await uploadFileToGladia('https://api.gladia.io/v2/upload', process.env.API_KEY as string, file as MultipartFile)

    reply.send(u)
}
