// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");



//FIXME: maybe not here but somewhere
// var User = schemas.User;
// User
//  .find()
//  .populate('friends')
//  .exec(...)
// You'll see that each User will have an array of Users (this user's friends).

// And the correct way to insert is like Gabor said:

// user.friends.push(newFriend._id);