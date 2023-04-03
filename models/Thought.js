const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");

//https://mongoosejs.com/docs/subdocs.html
//how to push to reactions array

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

  // TO SET DEFAULT WHEN CALL LATER FOR OBJECTID https://mongoosejs.com/docs/schematypes.html#objectids

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
    type: string,
     requiredTrue,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
