const mongoose = require('mongoose')
const{Schema} = mongoose;

const ClothingSchema = new Schema({
    owner:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    name: String,
    size: String,
    color: String,
    photo: String,
    description: String,
});

const ClothingModel = mongoose.model('Clothing', ClothingSchema);
module.exports = ClothingModel;