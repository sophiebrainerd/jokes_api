const express = require("express");
const app = express();
const port = 8000;
const mongoose = require('mongoose');

require("../server/config/mongoose.config");

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
    
const AllMyJokeRoutes = require("../server/routes/jokes.routes");
AllMyJokeRoutes(app);

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );