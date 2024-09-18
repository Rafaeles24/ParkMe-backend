'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Estacionamientos', [
      {
        posicion: 1,
        estado_registro: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        posicion: 2,
        estado_registro: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        posicion: 3,
        estado_registro: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        posicion: 4,
        estado_registro: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        posicion: 5,
        estado_registro: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Estacionamientos', null, {});
  }
};
