var express = require("express");
var router = express.Router();
require("dotenv").config();

router.get("/movies", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
