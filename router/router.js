const { getSkills, getRepos } = require('../controller/controller');
const express = require('express');

const router = express.Router();

router.get('/skills', getSkills);
router.get('/repos', getRepos);


module.exports = router;