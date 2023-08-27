const express = require('express');
const { getSkills, getRepos } = require('../controller/skillsController');

const router = express.Router();

router.get('/skills', getSkills)
router.get('/repos', getRepos)


module.exports = router;