const express = require("express");
const Staff= require("../models/Staff");
const { addStaff, getALLStaff } = require("../controllers/staffCont");
const isAuth = require("../middleware/passport");

const router = express.Router();
const upload=require("../utils/multer")

router.post("/addstaff",upload("staffs").single("file") ,isAuth() , addStaff);

router.get("/getstaffALL", getALLStaff);

//DELETE ONE Staff

router.delete("/:id", async (req, res) => {
  try {
    const result = await Staff.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "Staff already deleted" });
    }
    res.send({ msg: "Staff successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE ONE STAFF
router.put("/:id", async (req, res) => {
  try {
    const result = await Staff.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (!result.modifiedCount) 
    {return res.status(400).send({msg:"no things to update"});}
      res.send({msg:"Staff update"})
  } catch (error) {
    console.log(error);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const oneStaff = await Staff.findOne({ _id: req.params.id });
    res.send(oneStaff);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
