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

// Uses mongoose.model() to create model
const Thought = model('thought', thoughtSchema);


// Create a virtual property `reactionCount` that's computed from arrayLength.
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// // Uses model to create new instance including subdocument
// const managerData = { name: 'Taylor', salary: 80000 };
// const employeeData = [
//   { name: 'Ann', salary: 40000 },
//   { name: 'Liu', salary: 50000 },
// ];

// Department.create(
//   { name: 'Shoes', manager: managerData, employees: employeeData },
//   (err, data) => {
//     if (err) {
//       console.error(err);
//     }
//     console.log(data);
//   }
// );

module.exports = Thought;
