import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listingController.js';
import { verifyToken } from '../utils/verifyUser.js';

const listingRouter = express.Router();

listingRouter.post('/create',  createListing);
listingRouter.delete('/delete/:id', deleteListing);
listingRouter.post('/update/:id',  updateListing);
listingRouter.get('/get/:id', getListing);
listingRouter.get('/get', getListings);

export default listingRouter;
