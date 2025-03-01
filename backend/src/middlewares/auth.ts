import type { FastifyReply, FastifyRequest } from "fastify";

export default function auth(req: FastifyRequest, reply: FastifyReply) {
	 try {
	  console.log(req.headers.authorization);
	  console.log(req.headers.cookie);
	  // @ts-ignore
	  console.log(req.cookie);
	  //@ts-ignore
	  // const { bearer } = req.headers.authorization;
	  // console.log(bearer)
	  //@ts-ignore
	  // const { id } = req.headers.cookie;
	  if (!req.headers.authorization || !req.headers.cookie) {
	   return reply
	        .status(401)
	        .header('content-type', 'application/json')
	        .send({error: true, message: 'Unauthorized'});
	  }

	 } catch (err) {
	  reply.status(500).send({error: true, message: 'Internal Server Error'})
	 }
}
