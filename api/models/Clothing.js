const mongoose = require('mongoose')
const{Schema} = mongoose;

const ClothingSchema = new Schema({
    name: String,
    size: String,
    color: String,
    photos: [String],
    description: String,
});

const ClothingModel = mongoose.model('Clothing', ClothingSchema);
module.exports = ClothingModel;