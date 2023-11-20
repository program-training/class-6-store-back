import express from 'express';
import route from './routes';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use("/api", route)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});