// routers/planetsRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Person = require("../models").person;
const Planet = require("../models").planet;

// GET all planets
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  try {
    const responsePlanet = await Planet.findAll({
      limit,
      offset,
    });
    res.status(200).send(responsePlanet);
  } catch (e) {
    next(e.message);
  }
});

// GET based on climate filter return all planets with dark-haired people
router.get("/climate/dark-haired/:type", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;

  const searchType = req.params.type;

  try {
    const responsePlanet = await Planet.findAll({
      limit,
      offset,
      include: [
        {
          model: Person,
          // filter for black or brown aka dark-hair
          where: {
            [Op.or]: [{ hair_color: "brown" }, { hair_color: "black" }],
          },
        },
      ],
      where: {
        climate: searchType,
      },
    });

    res.status(200).send(responsePlanet.slice(0, 30));
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
