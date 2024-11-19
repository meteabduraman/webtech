import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export const Account = sequelize.define('Account', {
    id: { type: DataTypes.UUID, primaryKey: true },
    holderName: DataTypes.STRING,
});