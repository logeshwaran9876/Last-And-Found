import express from 'express';

const itemrouter = express.Router();


import { additem } from '../controllers/itemController.js';


itemrouter.post('/add', additem);


export default itemrouter;