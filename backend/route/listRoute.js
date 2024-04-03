const express = require('express');
const { listController } = require('../controller');
const router = express.Router();


router.post('/addtask', listController.addingtask);

router.get('/fetchtask', listController.fetchingtask);

router.put('/updatetask/:id', listController.updatingtask);

router.delete('/removetask/:id', listController.deletingtask);

module.exports = router;