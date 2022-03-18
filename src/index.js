import express from 'express';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/corse';
import routes from './modules/core/routes';
import dbConnect from './modules/core/db';

const app = express();
const PORT = 'https://salty-wildwood-20393.herokuapp.com/';

//localhost: 5000/

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);
//app.get('/', home);
//app.post('/info', info);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
