const mongoose = require("mongoose");
const MONGO_URI = require('./default.json').MONGO_URI;
// const MONGO_URI = config.get('MONGO_URI')

module.exports = async function () {
    try {

        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("...DB is connected");
    } catch (error) {
        console.log("Failed, Cannot connect to DB : ", error);
    }
};