// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

// =============================================================
// ROUTING
// =============================================================

module.exports = function (app) {

    // Default to Home Page if there is no match
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Basic route that sends the user first to the Home Page
    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Basic route that sends the user to the Survey Page  
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};