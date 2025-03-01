import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import cookie from "@fastify/cookie";
import { userRoutes, ticketRoutes } from "./src/routes/index.ts";
import auth from "./src/middlewares/auth.ts";
import dotenv from "dotenv";
dotenv.config();

/* 
  The ENV object centralize
  all environment variables in one place
*/
export const ENV = {
  PORT: Number(process.env.PORT),
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  SMTP_URL: process.env.SMTP_URL,
  SMTP_PORT: Number(process.env.SMTP_PORT),
  SMTP_HOST: process.env.SMTP_HOST,
};

/* 
  Fastify instance with logger
*/
export const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

/* 
  Plugins
*/
app.register(userRoutes, { prefix: "/users" });
app.register(ticketRoutes);
app.register(cookie); // Allows Fastify to use cookies
app.register(cors, {
  origin: ENV.CORS_ORIGIN,
  methods: ["GET", "POST"],
  credentials: true,
});

// app.addHook('preHandler', auth);

app.get("/", (req: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: "Requisição recebida" });
});

app.listen({ port: ENV.PORT }, (err) => {
  if (err) return console.log(err);

  console.log(`Servidor ouvindo na porta ${ENV.PORT}`);
});
