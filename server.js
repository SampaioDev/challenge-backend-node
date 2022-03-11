import router from './api/routes/omdbRoute.js';
import express from 'express';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use('/', router)

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
