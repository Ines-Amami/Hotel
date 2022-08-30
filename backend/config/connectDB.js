const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MANGO_ATLAS_URI);
        console.log("we are connected")
      } catch (error) {
        console.log(error);
      }
}
module.exports=connectDB