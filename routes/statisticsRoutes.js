const express = require('express');
const router = express.Router();

const statisticsService = require('../services/statisticsService');
const security=require('../middleware/apiSecurity');



router.post('/addStats',security.requireLogin,security.requireAdminRole, statisticsService.addStats);
router.put('/updateStatsById/:id', security.requireLogin,security.requireAdminRole,statisticsService.updateStatsById);

router.get('/getAllStats', security.requireLogin,statisticsService.getAllStats);
router.get('/getStatsById/:playerID', security.requireLogin,statisticsService.findStatisticsByPlayerID);


module.exports = router;