/* eslint-disable no-unused-vars */
const {Pool} = require('pg');

const pool = new Pool({
    user:'postgres',
    host:"localhost",
    database: "cryptoMania",
    password:"Tankcrusher4",
    port:5432
});

module.exports = {
    query: (text, params) => pool.query(text, params),
  }

