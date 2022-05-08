const del = require("del");

// Config

const path = require("../config/path.js");

const clean = () => {
  return del(path.root)
}

module.exports = clean;
