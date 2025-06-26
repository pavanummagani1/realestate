import bcryptjs from 'bcryptjs';
import User from '../models/userModel.js';
// import { errorHandler } from '../utils/error.js';
import Listing from '../models/listingModel.js';



export const updateUser = async (req, res, next) => {
  const {id} =  req.params
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const {id} = req.params
  try {
    await User.findByIdAndDelete(id);
    res.clearCookie('access_token');
    res.status(200).json('User has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const getUserListings = async (req, res, next) => {
  console.log(req.params)
  const email = req.params.id
    try {
      const listings = await Listing.find({email});
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  }

export const getUser = async (req, res, next) => {
  try {
    
    const user = await User.findById(req.params.id);
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._doc;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
