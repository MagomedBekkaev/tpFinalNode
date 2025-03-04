const { Sequelize, DataTypes } = require('sequelize');

const User = require('./user.model');
const Movie = require('./movie.model');

const models = {
    User,
    Movie,
};

Object.values(models).forEach((model) => {
    if (model.associate) {
      model.associate(models);
    }
  });

module.exports = {Sequelize, DataTypes, ...models};