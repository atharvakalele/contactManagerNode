const dotenv = require("dotenv").config()
const errorHandler = require('./middleware/errorHandler');
const express = require("express")

const port = process.env.PORT || 5000


const app = express()
app.use(errorHandler)
//As soon as the server starts this code would run.
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})  

//import the routes from the route folder
const contactRoutes = require('./routes/contact_routes')
const connectDb = require("./config/dbConnection")
const userRoutes = require('./routes/userRoutes')
app.use(express.json())//incoming http requests in the json format
connectDb()
app.use('/api/contacts',contactRoutes)
app.use('/api/users',userRoutes)