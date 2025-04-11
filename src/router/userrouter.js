import express from 'express';

const userrouter = express.Router();


import { addUser } from '../controllers/userController.js';


userrouter.post('/add',addUser);


export default userrouter;