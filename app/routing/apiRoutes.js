// =============================================================
// LOAD DATA
// Linking route to a "data source", whcih is an array of info.
// =============================================================

var friends = require("../data/friends");

// =============================================================
// ROUTING
// =============================================================

module.exports = function (app) {

    // Get all friend data USING AN API GET
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //Post all friend data to the page USING AN API POST
    app.post("/api/friends", function (req, res) {

        friends.push(req.body);
        res.json(true);
    });
};