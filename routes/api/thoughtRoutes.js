const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,

} = require('../../controllers/thoughtController');

//FIXME: Need a put to update thought by id

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);


//POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
// /api/thoughts/:thoughtId/assignments
router.route('/:thoughtId/assignments').post(addAssignment);

// /api/thoughts/:thoughtId/assignments/:assignmentId
router.route('/:thoughtId/assignments/:assignmentId').delete(removeAssignment);

//FIXME: 
// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

module.exports = router;
