const express = require('express');
const router = express.Router();

const footballerService = require('../services/footballersService');
const security=require('../middleware/apiSecurity');


router.post('/addFootballer', security.requireLogin,security.requireAdminRole,footballerService.add);
router.delete('/deleteFootballer/:id',security.requireLogin,security.requireAdminRole, footballerService.delete);
router.put('/updateFootballerInfo/:id', security.requireLogin,security.requireAdminRole,footballerService.update);

router.get('/getAllFootballersInfo',security.requireLogin, footballerService.getAll);
router.get('/findByNationality/:nationalityToFind',security.requireLogin, footballerService.findByNationality);
router.get('/findByPosition/:positionToFind',security.requireLogin, footballerService.findByPosition);
router.get('/GetAllFootballersFullInfo',security.requireLogin, footballerService.getAllFootballersWithStatistics);
router.get('/findFootballerById/:id',security.requireLogin,footballerService.findById);



module.exports = router;