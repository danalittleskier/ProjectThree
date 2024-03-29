const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the skiController
module.exports = {
  findAll: function(req, res) {
    db.Ski
      .find({})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    db.Ski
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
  },
  create: function(req, res) {
    db.Ski
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Ski
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getRecommendedSki: function(req, res) {
    db.Ski
      .findOne({ snow_recommendation: req.body.snowtype })
      .then(dbModel =>{       
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  getCustomSkis: function(req, res) {
    db.Ski
      .findOne({ pace_recommendation: req.body.level, gender: req.body.gender })
      .then(dbModel =>{      
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Ski
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
