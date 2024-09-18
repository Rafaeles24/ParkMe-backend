'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tarifas', [
      {
        valor: 50.0,
        motivo: 'Dia normal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        valor: 60.0,
        motivo: 'Dia festivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        valor: 70.0,
        motivo: 'Dia feriado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tarifas', null, {});
  }
};
