const notFound = (err, req, res, next ) => {
    console.error(err.stack);
    res.status(404).json({error: true, message: "Object not found"});
};

module.exports = notFound;