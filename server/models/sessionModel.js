const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  // 1800 seconds is 30 mins
  createdAt: { type: Date, expires: 1800, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
