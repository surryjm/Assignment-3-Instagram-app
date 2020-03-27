const mongoose = requrie('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  website: {
    type: String,
  },
  bio: {
    type: String,
  },
  handle: {
    type: String,
    required: true,
    max: 30
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);