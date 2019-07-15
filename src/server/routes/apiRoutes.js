const express = require("express");
const fs = require("fs");
const path = require("path");

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const list = path.join(__dirname, "../mocks/list.json");
    const response = await readFile(list, "utf-8");
    res.send(response);
  } catch (error) {
    console.log("error in /list ...", error);
  }
});

module.exports = router;
