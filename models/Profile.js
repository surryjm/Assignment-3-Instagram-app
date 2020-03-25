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
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);