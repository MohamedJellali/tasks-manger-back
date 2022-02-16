const mongoose = require ('mongoose') ;
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description : {
        type : String,
        required : true,
    },
    active : {
        type : String,
        default : 'Y'
    },
    isDone : {
        type : String,
        default : 'N'
    }
});

module.exports = mongoose.model('Task', taskSchema);