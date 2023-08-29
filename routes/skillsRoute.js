const express = require('express');
const cors = require("cors");

const { getSkills, getRepos } = require('../controller/skillsController');

const app = express();
const router = express.Router();

app.use(express.json())
app.use(cors());

router.get('/skills', getSkills)
router.get('/repos', getRepos)


module.exports = router;