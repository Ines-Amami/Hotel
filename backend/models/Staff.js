const mongoose = require('mongoose')


const staffSchema = new mongoose.Schema({
  namestaff:{ type: String, uppercase: true, trim: true, required: true },
 job:String,
 details:String,
 pic: String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
});

module.exports = Staff = mongoose.model('staff', staffSchema)