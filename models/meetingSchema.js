var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var userSchema = new Schema({
  user_id: {
    type: String,
    default: ''
  }
});

var meetingSchema = new Schema({
  username:
  {
    type:String,
    default: ''
  },
  adminID: {
    type:String,
    default: ''
  },
  dd: {
    type: String,
    default: '0'
  },
  mm: {
    type: String,
    default: '0'
  },
  yyyy: {
    type: String,
    default: '0'
  },
  hh: {
    type: String,
    default: '0'
  },
  min: {
    type: String,
    default: '0'
  },
  subject:
  {
    type: String,
    default: ''
  },
  agenda: {
    type:String,
    default: ''
  },
  users: [userSchema],
});


meetingSchema.plugin(passportLocalMongoose);
var meetingModel = mongoose.model('Meeting',meetingSchema);

module.exports=meetingModel;
