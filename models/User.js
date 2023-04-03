const { Schema, model } = require('mongoose');
require('mongoose-type-email');

// Schema to create Student model
const studentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
    },
    thoughts: [{ type: ObjectId, ref: "Thought" }],
    friends: [{ type: ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
