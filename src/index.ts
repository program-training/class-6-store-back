import express from 'express';
import route from './routes';
import { connectToDatabase } from './db/mongoose';
import morgan from './utils/serverLogs/morgan'
import cors from './utils/cors'

const app = express();
app.use(express.json());
app.use(morgan)
app.use(cors)


connectToDatabase()

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use("/api", route)

app.listen(3000, async() => {
  await connectToDatabase()
  console.log('Server listening on port 3000');
});