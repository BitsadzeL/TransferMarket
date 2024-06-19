const mongoose = require('mongoose')

const statisticsSchema = new mongoose.Schema({
    appearances: { type: Number, required: true },
    goals: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    yellowCards: { type: Number, default: 0 },
    redCards: { type: Number, default: 0 },
    cleanSheets: { type: Number, default: 0 },
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Footballer', required: true }

}, {
    collection: 'statistics',
    timestamps: true,
    read: 'nearest',
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeoutMS: 30000
    }
});

const statisticsModel = mongoose.model('Statistics', statisticsSchema);
module.exports = statisticsModel;