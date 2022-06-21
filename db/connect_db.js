const mongoose = require('mongoose');

const connectDB = () => {
    return mongoose.connect("mongodb://localhost:27017/blogWebsite")
        .then(() => {
            console.log("Connet Sucessfully.....")
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB