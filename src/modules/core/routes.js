import infoRouter from '../info/Routes';
import homeRouter from '../home/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/home', homeRouter);
}
