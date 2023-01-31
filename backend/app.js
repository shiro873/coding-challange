const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const config = require("./src/config/config.js");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
var swaggerUi = require('swagger-ui-express'),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerDocument = require('./swagger.json');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));

// database
const db = require("./src/models");
db.sequelize
  .sync()
  .then(() => {
    // initial(); 
    console.log('database status ----> synced');
  })
  .catch((err) => {
    console.log("error", err);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "hello, world" });
});

// api doc
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// api routes
require('./src/routes')(app);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


// set port, listen for requests
const PORT = config.PORT || 8080;
app.listen(8080, () => {
  console.log(`Server is running on port ${PORT}`);
});
