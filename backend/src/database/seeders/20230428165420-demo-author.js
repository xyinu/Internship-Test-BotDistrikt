'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Author', [
      {
        name: 'J. K. Rowling',
        biography: 'Joanne Rowling was born on 31st July 1965 at Yate General Hospital near Bristol, and grew up in Gloucestershire in England and in Chepstow, Gwent, in south-east Wales.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'J. R. R. Tolkien',
        biography: 'John Ronald Reuel Tolkien (1892–1973) was a major scholar of the English language, specialising in Old and Middle English.',
        created_at: new Date(),
        updated_at: new Date()
      }  
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Author', null, {});
  }
};
