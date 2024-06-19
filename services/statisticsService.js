const statisticsModel = require('../models/statisticsModel');
const footballerModel = require('../models/footballerModel');


module.exports = {

    addStats: async (req, res) => {
        try {
            const stats = await new statisticsModel(req.body).save();
            res.json(stats);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    getAllStats: (req, res) => {
        statisticsModel.find({})
            .then(data => {
                res.json(data);


            })
            .catch(error => {
                res.status(500).json(error);
            })
    },


    findStatisticsByPlayerID: async (req, res) => {
        try {
            const { playerID } = req.params;

            if (!playerID) {
                return res.status(400).json({ message: 'Player ID is required' });
            }

            
            const footballer = await footballerModel.findById(playerID);

            if (!footballer) {
                return res.status(404).json({ message: 'Footballer not found' });
            }

            
            const statistics = await statisticsModel.findOne({ playerId: playerID });


            const response = {
                footballer: footballer,
                statistics: statistics
            };

            res.json(response);
        } catch (error) {
            console.error('Error finding statistics:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }








}