const mongoose = require('mongoose');
const Schema = mongoose.Schema

const temperatureSchema = new Schema({
    data: String,
})

//below line will automatically generate createdAt & updatedAt fields
temperatureSchema.set('timestamps', true);
const temperatureModel = mongoose.model('temperature', temperatureSchema );
module.exports = temperatureModel;