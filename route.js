const express = require('express');
const Request = require("request");
const router = express.Router();
const bcrypt = require('bcryptjs')
const moment = require('moment')
const jwt = require('jsonwebtoken')

//const model = require("./model")
/*
 * GET home page.
 */
router.get('/', function (req, res) {
  res.send('Hello world!');
});







router.get('/data', async function (req, res, next) {
  await Request.get("http://dummy.restapiexample.com/api/v1/employees", (error, response, body) => {
    if (error) {
      return console.dir(error);
    }

    res.send(body);
    next();
    console.dir(JSON.parse(body));
  });
});


module.exports = router;
