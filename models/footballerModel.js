const mongoose = require('mongoose')

const footballerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    position: { type: String, required: true },
    nationality: { type: String, required: true },
    club: { type: String, required: true },
    price: { type: Number, required: true }
}, {
    collection: 'footballers',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const playerModel = mongoose.model('Footballer', footballerSchema);
module.exports = playerModel;