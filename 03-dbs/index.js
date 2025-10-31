// We changed around the two import statements below
// If you get an error like "cannot use import outside module", "type": "module" to your package.json file

// const express = require('express')
import express from 'express';

// const { DataTypes, Sequelize } = require('sequelize')
import { DataTypes, Sequelize } from 'sequelize';
import { v4 } from 'uuid';

const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
});

const GroceryItem = sequelize.define('GroceryItem', {
    id: { primaryKey: true, type: DataTypes.STRING },
    name: DataTypes.STRING,
    historicQuantity: DataTypes.INTEGER,
    availableQuantity: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    holder: DataTypes.STRING,
});

// you can (and probably will) have multiple models too
const VirtualPet = sequelize.define('VirtualPet', {
    id: { primaryKey: true, type: DataTypes.STRING },
    age: DataTypes.INTEGER,
    foodLevel: DataTypes.INTEGER,
    waterLevel: DataTypes.INTEGER,
    energyLevel: DataTypes.INTEGER,
});

try {
    await sequelize.sync({ alter: true });
} catch (err) {
    console.log(err);
}

// for testing purposes, let's add a Grocery Item and a Virtual Pet in our DB
// note i'm using another library 'uuid' to generate random UUIDs
// you can also install it with `npm install uuid` and use it like here
await GroceryItem.create({
    id: v4(),
    name: 'Apple',
    historicQuantity: 10,
    availableQuantity: 5,
    expirationDate: new Date('31 December 2025, 23:59'),
    holder: 'some-id-of-a-user',
});

await VirtualPet.create({
    id: v4(),
    age: 1,
    foodLevel: 100,
    waterLevel: 100,
    energyLevel: 100,
});

app.use(express.json());

// these endpoint paths should be plural
app.get('/grocery-items', async (req, res) => {
    const items = await GroceryItem.findAll();
    res.status(200).json({
        groceryItems: items,
    });
});

app.get('/virtual-pets', async (req, res) => {
    const items = await VirtualPet.findAll();
    res.status(200).json({
        pets: items,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
