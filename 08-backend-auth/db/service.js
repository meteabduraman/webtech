import { Account } from "./Account.model.js";

export async function findAccountById(id) {
    const account = await Account.findByPk(id);
    return account?.dataValues;
}

export async function migrate() {
    await Account.sync();

    await Account.create({
        id: '80f23616-f9f4-41f8-ba48-3ec4bdf03f81',
        holderName: 'Mete',
    });

    await Account.create({
        id: 'dfca242a-cb46-4a57-ab91-29716dcd8925',
        holderName: 'Not Mete',
    });
}