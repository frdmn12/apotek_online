const express = require("express");
const router = express.Router();
const db = require("../database");
// const _ = require("lodash");

router.get("/", (req, res) => {
  let sql = 'SELECT * FROM product';
    // let qu
  db.query(sql, (err, data) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send(data);
  });
});

module.exports = router;
