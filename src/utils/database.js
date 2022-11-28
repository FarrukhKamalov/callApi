const mongoose = require('mongoose');
require('dotenv')


const connectDB = ()=> {
 mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,  
  }).then(()=> {
    console.log('Mongodb')
  }).catch((err)=>{
    console.log(err.message)
  })
}

module.exports = connectDB