// routers/planetsRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Films = require("../models").films;
const People = require("../models").people;
const Planets = require("../models").planets;

// GET all planets
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  try {
    const allPlanets = await Planets.findAll({
      limit,
      offset,
    });
    res.status(200).send(allPlanets);
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
