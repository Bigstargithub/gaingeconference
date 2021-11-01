'use strict'

const { Sequelize } = require('sequelize')

module.exports = function(sequelize, DataType){
  const code_list = sequelize.define('code_list', {
    number: {type: Sequelize.INTEGER(11),primaryKey: true, autoIncrement: true},
    code: {type: Sequelize.STRING(20), allowNull: false},
    name: {type: Sequelize.STRING(20), allowNull: false}
  });
  
  return code_list
}