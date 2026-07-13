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

    const reviewSql = "SELECT name, vote, text FROM reviews WHERE movie_id = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Error fetching movie:", err);
            return res.status(500).json({ error: true, message: "Internal server error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: true, message: "Movie not found" });
        }

        const movie = results[0];

        connection.query(reviewSql, [id], (err, reviews) => {
            if (err) {
                console.error("Error fetching reviews:", err);
                return res.status(500).json({ error: true, message: "Internal server error" });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: true, message: "Movie not found" });
            }

            movie.reviews = reviews;
            res.json(movie);
        })

    });
};


// POST /movies/:id/reviews — salva una nuova recensione per un film
const storeReview = (req, res) => {
    const movieId = parseInt(req.params.id);
    const { name, vote, text } = req.body;

    const sql = "INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)";

    connection.query(sql, [movieId, name, vote, text], (err, results) => {
        if (err) {
            console.error("Error creating review:", err);
            return res
                .status(500)
                .json({ error: true, message: "Internal server error" });
        }

        res.status(201).json({
            id: results.insertId,
            movie_id: movieId,
            name,
            vote,
            text,
        });
    });
};


module.exports = { index, show, storeReview };
