const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  name:{ type: String, uppercase: true, trim: true, required: true },
  price : Number,
  maxPeople: {
    type: Number,
    required: true,
  },
  size:{
    type: Number,
    required: true,
  },
  view:{
    type: String,
    required: true,
  },
  bed:{
    type: Number,
    required: true,
  },
  facility:{
    type: String,
    required: true,
  },

  pic: String,
  user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
});

module.exports = Product = mongoose.model('product', productSchema)