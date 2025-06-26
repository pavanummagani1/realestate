import express from 'express';
import {
  deleteUser,
  updateUser,
  getUserListings,
  getUser
} from '../controllers/userController.js';
// import {   } from '../utils/verifyUser.js';

const userRouter = express.Router();

// userRouter.post('/update/:id',  , updateUser);
// userRouter.delete('/delete/:id',  , deleteUser);
// userRouter.get('/listings/:id',  , getUserListings);
// userRouter.get('/:id',  , getUser);

userRouter.post('/update/:id',updateUser);
userRouter.delete('/delete/:id',deleteUser);
userRouter.get('/listings/:id',getUserListings);
userRouter.get('/:id',getUser);

export default userRouter;