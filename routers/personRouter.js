// routers/personRouter.js

const { Router } = require("express");
const router = new Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Film = require("../models").film;
const Person = require("../models").person;

// GET all person
router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;
  try {
    const responsePerson = await Person.findAll({
      limit,
      offset,
    });
    res.status(200).send(responsePerson);
  } catch (e) {
    next(e.message);
  }
});

// GET all person sorted by height and ASC or DESC
router.get("/height/:order", async (req, res, next) => {
  // declaring offset & limit used in the final RETURN
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;

  // ASC or DESC
  const searchOrder = preq.params.order;

  try {
    const responsePerson = await Person.findAll();

    const responsePersonNew = responsePerson.filter(
      (person, index, self) =>
        index === self.findIndex((t) => t.name === person.name)
    );

    if (searchOrder === "ASC") {
      responsePersonNew.sort(function (a, b) {
        return parseInt(a.height) - parseInt(b.height);
      });
    }
    if (searchOrder === "DESC") {
      responsePersonNew.sort(function (a, b) {
        return parseInt(b.height) - parseInt(a.height);
      });
    }
    res.status(200).send(responsePersonNew.slice(offset, limit));
  } catch (e) {
    next(e.message);
  }
});

// GET all person sorted by height and ASC or DESC
router.get("/age/:order", async (req, res, next) => {
  // declaring offset & limit used in the final RETURN
  const limit = req.query.limit || 30;
  const offset = req.query.offset || 0;

  // ASC or DESC
  const searchOrder = req.params.order;

  try {
    const responsePerson = await Person.findAll();

    const responsePersonNew = responsePerson.filter(
      (person, index, self) =>
        index ===
        self.findIndex(
          (t) => t.name === person.name && t.birth_year !== "unknown"
        )
    );

    if (searchOrder === "ASC") {
      responsePersonNew.sort(function (a, b) {
        return parseInt(a.birth_year) - parseInt(b.birth_year);
      });
    }
    if (searchOrder === "DESC") {
      responsePersonNew.sort(function (a, b) {
        return parseInt(b.birth_year) - parseInt(a.birth_year);
      });
    }
    res.status(200).send(responsePersonNew.slice(offset, limit));
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;
