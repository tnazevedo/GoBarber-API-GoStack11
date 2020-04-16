import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';
import './database';
const app = express();

app.use(express.json());
/* Rota estática para visualização de arquivos */
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(3333, () => {
  console.log('Server Started on port 3333!!');
});
