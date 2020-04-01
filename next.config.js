require('dotenv').config();

module.exports = {
  env: {
    DATABASE_URI: process.env.DATABASE_URI,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
    SERVER_PROTOCOL: process.env.SERVER_PROTOCOL,
    REPOSITORIES_PATH: process.env.REPOSITORIES_PATH,
    AUTHORIZED_KEY_FILE: process.env.AUTHORIZED_KEY_FILE
  }
};