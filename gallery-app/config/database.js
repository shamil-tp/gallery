const mongoose = require('mongoose');
const uri = process.env.DB

exports.connectDB = function(){
    mongoose.connect(uri).then(()=>{console.log("connected to DB")}).catch((e)=>{console.log("error occured ")
        console.log(e)
    })
}


