import infoRouter from '../info/Routes';
import homeRouter from '../home/Routes';

export default function routes(app) {
  app.use('/', homeRouter);
  app.use('/info', infoRouter);
}
