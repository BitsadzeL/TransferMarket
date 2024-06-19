const express = require('express');
const router = express.Router();

const statisticsService = require('../services/statisticsService');



router.post('/addStats', statisticsService.addStats);
router.get('/getAllStats', statisticsService.getAllStats);
router.get('/getStatsById/:playerID', statisticsService.findStatisticsByPlayerID);
// router.get('/getAll', footballerService.getAll);
// router.get('/findByName/:nameToFind', footballerService.findByName);
// router.delete('/delete/:id', footballerService.delete);
// router.get('/findByNationality/:nationalityToFind', footballerService.findByNationality);
// router.get('/findByPosition/:positionToFind', footballerService.findByPosition);
//router.delete('/:id', studentService.delete);
//router.put('/:id', studentService.update);

module.exports = router;