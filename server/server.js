/* eslint-disable no-unused-vars */
const pool = require('pg').Pool

const db = new pool({
    user:'postgres',
    host:"localhost",
    database: "cryptoMania",
    password:"Tankcrusher4",
    port:5432
})
