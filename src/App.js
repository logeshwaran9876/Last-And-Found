import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './connection/config.js';
import itemrouter from './router/itemrouter.js';
import userrouter from './router/userrouter.js';

const app = express();

dotenv.config({ path: './src/.env' });

const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connect();

app.use('/api/v1/items', itemrouter); 


app.use('/api/v1/user', userrouter); 

app.get('/', (req, res) => {
  res.send('Hello from Express backend 👋');
});


app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});