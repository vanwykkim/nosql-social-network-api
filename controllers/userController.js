// ObjectId() method for converting userId string into an ObjectId for querying database
const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

// getUsers,
  // getSingleUser,
  // createUser,
  // updateUser,
  // deleteUser,
  //may add and remove thought when create and delete thought so not needed here???
  // addThought,
  // removeThought,
  // addFriend,
  // removeFriend


module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findById({ _id: req.params.userId })
    //FIXME: need to populate thoughts and friends
      .select("-__v")
      //.populate("thoughts")
      //.populate("friends")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
//FIXME:
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
          //delete all thoughts for this user
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: " but no user with this id!" })
          : res.json({ message: " successfully deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Add a friend to the frends array
  addfriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend from friends array
  removefriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { _id: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};