const mongoose = require('mongoose')
const url = "mongodb+srv://akash:1234@cluster0.4ctzdvd.mongodb.net/?retryWrites=true&w=majority"
const connectDB = () => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
