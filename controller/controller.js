const { ObjectId } = require('mongodb');
const { skillCollection, repoCollection } = require('../model/model');
const express = require('express');

express.json();

const getSkills = async (req, res) => {
  const result = await skillCollection.find({}).toArray();
  if (!result) {
    res.send({ "message": 'mongoDB error!' })
  }
  res.status(200).send(result)
}


const getRepos = async (req, res) => {
  const result = await repoCollection.find({}).toArray();
  if (!result) {
    res.send({ "message": 'mongoDB error!' })
  }
  res.status(200).send(result)
}

module.exports = {
  getSkills,
  getRepos
}