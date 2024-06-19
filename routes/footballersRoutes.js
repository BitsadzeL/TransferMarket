const express = require('express');
const router = express.Router();

const footballerService = require('../services/footballersService');


router.post('/add', footballerService.add);
router.get('/getAll', footballerService.getAll);
router.get('/findByName/:nameToFind', footballerService.findByName);
router.delete('/delete/:id', footballerService.delete);
router.get('/findByNationality/:nationalityToFind', footballerService.findByNationality);
router.get('/findByPosition/:positionToFind', footballerService.findByPosition);
router.get('/withStatistics', footballerService.getAllFootballersWithStatistics);

//router.put('/:id', studentService.update);

module.exports = router;