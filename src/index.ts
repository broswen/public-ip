
export type Env = {
}

export async function handleRequest(request: Request, env: Env) {
  console.log(request.headers.get('cf-connecting-ip'))
  return new Response(request.headers.get('cf-connecting-ip'))
}

const worker: ExportedHandler<Env> = { fetch: handleRequest };
export default worker;
