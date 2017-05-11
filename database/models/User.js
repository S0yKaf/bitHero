'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    twitch_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    display_name: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    access_token: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    refresh_token: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    logo: {
      type: DataTypes.STRING(),
      allowNull: true
    },
    channel: {
      type: DataTypes.STRING(),
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
