'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Book', [
      {
        title: "Harry Potter and the Philosopher's Stone",
        publisher: "Bloomsbury",
        year:1997,
        authorId:'J. K. Rowling',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        publisher: "Bloomsbury",
        year:1998,
        authorId:'J. K. Rowling',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Harry Potter and the Prisoner of Azkaban",
        publisher: "Bloomsbury",
        year:1999,
        authorId:'J. K. Rowling',
        created_at: new Date(),
        updated_at: new Date()
      } ,
      {
        title: "Harry Potter and the Goblet of Fire",
        publisher: "Bloomsbury",
        year:2000,
        authorId:'J. K. Rowling',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "The Lord of the Rings",
        publisher: "HarperCollins",
        year:1954,
        authorId:'J. R. R. Tolkien',
        created_at: new Date(),
        updated_at: new Date()
      } ,
      {
        title: "The Hobbit",
        publisher: "Houghton Mifflin Harcourt",
        year:1937,
        authorId:'J. R. R. Tolkien',
        created_at: new Date(),
        updated_at: new Date()
      }    
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Book', null, {});
  }
};
