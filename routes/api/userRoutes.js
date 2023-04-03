const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/userController.js");

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
// /api/thoughts/:thoughtId/assignments
//router.route('/:userId/thoughts').post(addThought);

//FIXME: need this route somewhere
//api/users/:userId/friends/:friendId

// /api/thoughts/:thoughtId/assignments/:assignmentId
router.route('/:userId/thoughts/:userId').delete(removeThought);

module.exports = router;
