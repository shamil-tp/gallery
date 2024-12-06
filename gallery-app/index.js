const express = require("express")
const app = express()

app.set("view engine","ejs")
app.set("views","views")

const {getLoginPage} = require("./controllers/auth")

app.get('/hello',getLoginPage)

app.listen(8000,()=>{console.log('app is running')})