const express = require ("express")
const app = express ()
require("./Config/DataBase")
const AuthRoute = require ("./routers/AuthRoute")
const UserRoute = require ("./routers/UserRoute")
const port = process.env.PORT || 4000
app.use(express.json())
app.use(AuthRoute)
app.use(UserRoute)
app.listen(port, ()=>{
    console.log("server runninig")
})
