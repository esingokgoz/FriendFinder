// ==============================================================================
// DEPENDENCIES
// ==============================================================================
var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(urlencoded({ extended: true })); ////ASK THIS
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes");

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);   /////ASK THIS
})