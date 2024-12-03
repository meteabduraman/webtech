import { Limit } from './Limit.model.js';

export async function migrate() {
    // this creates the Table if it doesn't exist
    // otherwise it does nothing
    // make sure to not forget this function call
    await Limit.sync();

    // this is equivallent to
    // INSERT INTO LIMITS(iban, value) VALUES("some-iban", 10);
    await Limit.create({
        iban: 'some-iban',
        value: 10,
    });

    await Limit.create({
        iban: 'some-other-iban',
        value: 20,
    });
}

// service function which returns a list of
// all the entries in the table
export async function getAllLimits() {
    // this is equivallent to SELECT * FROM LIMITS;
    const queryResult = await Limit.findAll();
    const limits = queryResult.map((item) => item.dataValues);
    return limits;
}

// service function which can return either the entry
// associated with the primary key passed,
// or `undefined` if not found

// notice the optional chaining operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
export async function getLimitByIban(iban) {
    // this is equivallent to SELECT * FROM LIMITS WHERE ID=iban;
    const queryResult = await Limit.findByPk(iban);
    return queryResult?.dataValues;
}