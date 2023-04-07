const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require("../../controllers/userController.js");

//this happens in thoughts maybe?
const {
  addThought,
  removeThought,
} = require("../../controllers/thoughtController.js");

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

//FIXME: does this go here or thoughts
//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// /api/:userId/thoughts
//router.route('/:userId/thoughts').post(addThought);

// /api/users/:userID/thoughts/:thoughtId
//router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);


//api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/users/:userId/friends/:friendId/
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
