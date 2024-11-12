import { DataTypes } from 'sequelize';
import { sequelize } from './db.js';

export const Limit = sequelize.define('Limit', {
    iban: { type: DataTypes.STRING, primaryKey: true },
    value: DataTypes.NUMBER,
});