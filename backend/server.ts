import fastify, { type FastifyReply, type FastifyRequest } from 'fastify';
import fastifyFormbody from '@fastify/formbody';
import cors from '@fastify/cors';

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true
      }
    }
  }
});

app.register(fastifyFormbody);

app.register(cors, {
  origin: "http://localhost:5173",
  methods: ['GET', 'POST']
});


app.get('/', (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({"message": "Requisição recebida"});
});

app.post('/signin', (req: FastifyRequest, reply: FastifyReply) => {
  const body = req.body;
  console.log(body);
  reply.status(200).send({"success": true});
});

app.post('/signup', (req: FastifyRequest, reply: FastifyReply) => {
  const body = req.body;
  console.log(body);
  reply.status(200).send(body);
});

app.listen({ port: 8080 }, () => console.log("Servidor ouvindo na porta 8080"));