import { handleDownload } from '../controllers/UploadHere.js';
export async function registerRoutes(server) {
    await server.post("/upload", (req, res) => handleDownload(req, res));
    await server.get('/transcript', (req, res) => handleDownload(req, res));
}
