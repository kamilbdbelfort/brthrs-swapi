// routers/filmRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Film = require("../models").film;
const Person = require("../models").person;

// GET all film
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  try {
    const responseFilm = await Film.findAll({
      limit,
      offset,
    });
    res.status(200).send(responseFilm);
  } catch (e) {
    next(e.message);
  }
});

// GET a specific film, return all characters
router.get("/search/:title/:gender", async (req, res, next) => {
  // params
  const searchTitle = req.params.title;
  const searchGender = req.params.gender;

  if (!searchTitle) {
    return res.status(400).send("Please type in a title of a movie!");
  }
  try {
    const searchFilm = await Film.findOne({
      // put them all to lowercase using Sequelize.fn "lower"
      where: {
        title: {
          [Op.iLike]: `${searchTitle}`, // title = search term
        },
      },
      include: [Person], // include characters
    });
    const searchedPeople = searchFilm.people;

    // check if gender filter was selected
    if (searchGender) {
      const filterGender = searchedPeople.filter(
        (person) => person.gender === searchGender
      );
      return res.status(200).send(filterGender);
    }
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
