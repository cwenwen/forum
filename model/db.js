// use Sequelize
const Sequelize = require('sequelize');

const sequelize = new Sequelize('forumDB', process.env.USER, process.env.PWD, {
  host: 'localhost',
  dialect: 'mysql',
  timezone: "+08:00",
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }
});

sequelize
  .authenticate()
  .then(() => console.log('Connecting succeeded'))
  .catch(error => console.log(`Connecting error: ${error}`))

module.exports = sequelize;
