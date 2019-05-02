require('dotenv').config();
let config = {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
//   database: process.env.DATABASE
};
module.exports = config;