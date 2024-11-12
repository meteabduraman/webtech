import { Sequelize } from 'sequelize';

// here you'll be able to specify the connection string to a database
// depending on the choice of database, here you'll also be able to supply
// credentials, etc

// more: https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
export const sequelize = new Sequelize('sqlite::memory:');