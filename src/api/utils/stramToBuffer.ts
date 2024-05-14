export async function streamToBuffer(stream: AsyncIterable<unknown>): Promise<Buffer> {
    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks as Uint8Array[]);
}
