const express = require('express');
const BugController = require('../controllers/bugController');

const router = express.Router();
const bugController = new BugController();

router.post('/bugs', bugController.createBug);
router.get('/bugs', bugController.getBugs);
router.put('/bugs/:id', bugController.updateBug);
router.delete('/bugs/:id', bugController.deleteBug);

module.exports = router;