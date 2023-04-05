const { Schema, model } = require('mongoose');
require('mongoose-type-email');

// Schema to create user model
const userSchema = new Schema(
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
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Models are constructors compiled from a schema and pass down the properties and methods to each instance
const User = model('user', userSchema);

// // This custom method extends the methods object - returns the number of friends a user has
// userSchema.methods.countFriends = function () {
//   // The 'this' keyword is used to specify the properties belonging to the particular instance
//   return this.friends.length;
// };

// Create a virtual property `friendCount` that's computed from arrayLength.
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

module.exports = Student;


//const sara = await User.create({ userName: "sara", email: 'test@gmail.com' });
// `friendCount` is now a property on User documents.
//sara.friendCount; 