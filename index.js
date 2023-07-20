// import required dependencies
const express = require("express");
const Unblocker = require("unblocker");

// create an express app instance
const app = express();
// create a new Unblocker instance
const unblocker = new Unblocker({ prefix: "/proxy/" });

// set the port
const port = 3000;

// add the unblocker middleware to the Express application
app.use(unblocker);

// listen on specified port
app.listen(port).on("upgrade", unblocker.onUpgrade);
console.log(`proxy running on http://localhost:${port}/proxy/`);