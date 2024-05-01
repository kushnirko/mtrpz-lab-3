import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import convert from './converter.js';

const fastify = Fastify();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

fastify.register(fastifyStatic, {
  root: path.join(dirname, '../public'),
});

fastify.post('/convert', (request, reply) => {
  const md = request.body;
  const res = convert(md);
  if (res instanceof Error) {
    reply.code(400).send(res.message);
  } else {
    reply.code(200).send(res);
  }
});

fastify.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`server is listening on ${address}`);
});

const shutdown = async () => {
  console.log('server is shutting down');
  await fastify.close();
  process.exit(0);
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
