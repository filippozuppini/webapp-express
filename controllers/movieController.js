const connection = require("../database/connection");

// GET /movies — lista di tutti i film
const index = (req, res) => {
    const sql = "SELECT * FROM movies";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching movies:", err);
            return res.status(500).json({ error: true, message: "Internal server error" });
        }
        res.json(results);
    });
};

// GET /movies/:id — singolo film per ID
const show = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "SELECT * FROM movies WHERE id = ?";

    const reviewSql = "SELECT id, review, rating, name FROM reviews WHERE movie_id = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error fetching movie:", err);
            return res.status(500).json({ error: true, message: "Internal server error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: true, message: "Movie not found" });
        }

        const movie = results[0];
        
        movie.reviews = reviewSql;

        res.json(movie);

    });
};

module.exports = { index, show };
