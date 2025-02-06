const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  connection.query(sql, (error, results) => {
    if (error) return res.status(500).json({ error: "query al db fallita" });
  });
};

const show = (req, res) => {
  const id = req.params.id;

  const sqMovie = "SELECT * FROM movies WHERE id = ?";
  const sqReview = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(sqMovie, [id], (error, results) => {
    if (error) return res.status(500).json({ error: "query al db fallita" });
    if (results.lenght === 0)
      return res.status(404).json({ error: "Film non trovato" });
    res.json(results[0]);
  });

  let movie = results[0];

  connection.query(sqReview, [id], (error, reviewResults) => {
    if (error) return res.status(500).json({ error: "query al db fallita" });
    movie.reviews = reviewResults;
    res.json(movie);
  });
};

module.exports = {
  index,
  show,
};