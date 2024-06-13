const footballerModel = require('../models/footballerModel');


module.exports = {

    add: async (req, res) => {
        try {
            const player = await new footballerModel(req.body).save();
            res.json(player);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    getAll: (req, res) => {
        footballerModel.find({})
            .then(data => {
                res.json(data);
                

            })
            .catch(error => {
                res.status(500).json(error);
            })
    },

    findByName: (req, res) => {
        const { nameToFind} = req.params;
        footballerModel.find({ firstName: nameToFind })
            .then(data => {
                res.json(data)

            })
            .catch(error => {
                res.status(500).json(error)
            })

    },

    findByNationality: (req, res) => {
        const { nationalityToFind } = req.params
        footballerModel.find({ nationality: nationalityToFind })
            .then(data => {
                res.json(data)

            })
            .catch(error=>{
                req.status(500).json(error)
            })

    },


    findByPosition:(req,res)=>{
        const {positionToFind}=req.params

        footballerModel.find({position:positionToFind})
        .then(data=>{
            res.json(data)

        })
        .catch(error=>{
            req.status(500).json(error)
        })
    },




    delete: async (req, res) => {
        try {
            await footballerModel.deleteOne({ _id: req.params.id });
            res.json({ success: 'footballer deleted' });
        } catch (error) {
            res.status(500).json(error);
        }
    },




    // update: async (req, res) => {
    //     try {
    //         const item = await StudentModel.findByIdAndUpdate(req.params.id,
    //             { $set: req.body },
    //             {
    //                 new: true
    //             }
    //         );
    //         res.json(item);
    //     } catch (error) {
    //         res.status(500).json(error);
    //     }
    // }
}