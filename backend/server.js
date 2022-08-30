const express = require('express')
const cors=require("cors")
const app = express()
//const Product = require("./models/Product")
const connectDB = require('./config/connectDB')

require('dotenv').config()
app.use("/uploads", express.static(__dirname + "/uploads"));
//console.log(process.env.MANGO_ATLAS_URI)


app.use(express.json())
app.use(cors())
connectDB()


app.use("/products",require('./routes/ProductRoutes'))
app.use("/staffs",require('./routes/StaffRoutes'))
app.use("/users",require('./routes/usersRoutes'))


const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




