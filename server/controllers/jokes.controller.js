const Jokes = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then(allTheJokes => res.json({ jokes: allTheJokes}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate({ _id: req.params.id })
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteAJoke = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result}))
        .catch(err => res.json({ message: "Something went wrong", error: err}));
};