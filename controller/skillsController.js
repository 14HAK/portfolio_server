const express = require('express');
const { skillCollections, repoCollections } = require('../model/skills');

express.json()

const getSkills = async (req, res) => {
  const result = await skillCollections.find({}).toArray();

  if (!result) {
    res.send({ "message": 'mongoDB error!' })
  }

  res.status(200).send(result)
  console.log(result);
}

const getRepos = async (req, res) => {
  const result = await repoCollections.find({}).toArray();

  if (!result) {
    res.send({ "message": 'mongoDB error!' })
  }

  res.status(200).send(result)
  // console.log(result);
}

module.exports = { getSkills, getRepos };