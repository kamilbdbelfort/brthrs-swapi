// routers/soundRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Films = require("../models").films;
const People = require("../models").people;

// GET all films
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  try {
    const allFilms = await Films.findAll({
      limit,
      offset,
    });
    res.status(200).send(allFilms);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
