import express, {Express} from 'express';
import cors from 'cors';
import { crearTablas, pool } from './db/poolConfig';
import { crearApi } from './routes';
import { boomHandle } from './middlewares/boomHandle';

const PORT = process.env.PORT || 3002;
const app:Express = express();

app.use(express.json());
app.use(cors());
crearTablas();

crearApi(app);
app.use(boomHandle);

app.get('/', async (req, res)=>{
   res.json({message:'hola'});
});

app.listen(PORT);






