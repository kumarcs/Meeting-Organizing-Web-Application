var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var notificationSchema=new Schema({
  name:{
    type: String,
    required : true
  },
  text :{
    type : String,
    required : true
  },
  gettingid:{
    type:String,
    required: true
  },
  groupornot:{
    type:Boolean,
    required: true
  }
},
{
timestamp: true
});

var GCASchema = new Schema({
GCA_id: {
  type: String,
}}, {
  timestamps: true
});

var PCASchema = new Schema({
PCA_id: {
  type: String,
}}, {
timestamps: true
});

var promptRequestSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  user_id: {
    type: String,
    default: ''
  },
  status: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  }
});


var userSchema = new Schema({
// user_id:
// {
//   type: String,
//   // required: true
// },
firstname:
{
  type:String,
  default: ''
},
lastname: {
  type:String,
  default: ''
},
middlename:
{
  type: String,
  default: ''
},
// dob: [dateofbirth],
designation: {
  type:String,
  default: ''
},
level1: {
  type: Boolean,
  default: false
},
email: {
  type:String,
  default: ''
},
admin: {
  type: Boolean,
  default: false
},
personalChatAssociated: [PCASchema],
groupChatAssociated: [GCASchema],
promptRequest: [promptRequestSchema],
notification: [notificationSchema]
});



userSchema.plugin(passportLocalMongoose);
var userModel = mongoose.model('User',userSchema);

module.exports=userModel;
