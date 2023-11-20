import express from 'express';
import route from './routes';
import { connectToDatabase } from './db/mongoose';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use("/api", route)

app.listen(3000, async() => {
  await connectToDatabase()
  console.log('Server listening on port 3000');
});