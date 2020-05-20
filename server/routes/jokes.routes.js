const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/_id", JokeController.findOneJoke);
    // app.get("/jokes/random", JokesController.);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/_id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/_id", JokeController.deleteAJoke);
}