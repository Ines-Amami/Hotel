const Staff = require("../models/Staff");

module.exports.addStaff= async function (req, res) {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;

    try {
      const existStaff = await Staff.findOne({ namestaff: req.body.namestaff });
      if (existStaff) {
        res.status(400).send({ msg: "Staff exist" });
      } else {
        const newStaff = new Staff({
          ...req.body,user:req.user._id
        });
    newStaff.img = `${url}/${file.path}`;

        await newStaff.save();
        res.send({ msg: "newStaff added" });
      }
    } catch (error) {
      console.log(error);
    }
  }


  exports.getALLStaff=async function (req, res) {
 
    try {
     
      const allStaff = await Staff.find({
        $and: [
          { job: { $gte: req.query.price || 0 } },
          { namestaff: { $regex: req.query.namestaff || "" } }
        ],
      }).populate("user","fullName");
      res.send({ allStaff });
    } catch (error) {
      console.log(error);
    }
  }