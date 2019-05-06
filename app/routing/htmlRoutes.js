// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path =  require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module. exports = function(app) {
    // HTML GET Requests
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}