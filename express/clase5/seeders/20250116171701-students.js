'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
async up (queryInterface, Sequelize) {
 return queryInterface.bulkInsert('students', [
 {
  name: 'almanzor',
 last_name: 'ass',
 date_of_birth: '1977-04-14',
 createdAt: new Date(),
 updatedAt: new Date(),
 email: 'alskaklslkas@gmail.com',
 active: true,
    },
{
name: 'Alex',
last_name: 'Martel',
date_of_birth: '1985-10-21',
createdAt: new Date(),
updatedAt: new Date(),
email: 'klslekas@gmail.com',
active: true,
      },
 {
 name: 'Joaquin',
 last_name: 'Torres',
 date_of_birth: '2014-09-15',
 createdAt: new Date(),
 updatedAt: new Date(),
 email: 'alkas@gmail.com',
 active: true,
 },
 ], {});
 },
async down (queryInterface, Sequelize) {
 return queryInterface.bulkDelete('students', null, {});
 }
};