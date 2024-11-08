// copy pasted from 4-js-intro
// removed the function call and console.log statement

// imagine this array is our DB
const accounts = [{
    iban: 'RO00AIEN0000000000000001',
    balance: 100,
    currency: 'RON',
    holderName: 'Mete',
}, {
    iban: 'RO00AIEN0000000000000002',
    balance: 40,
    currency: 'RON',
    holderName: 'Not Mete',
}];

// imagine this function is actually behind an API endpoint such as
// POST /transfer
// and the body of the request contains the parameters we pass here
// when we have >3 params it's recommended to encapsulate them within
// an object instead of passing them one by one
// in this case, transferDetails would be an object that contains
// the amount, sourceIban, destinationIban, etc
function transfer(transferDetails) {
    // first validate that that each of the parameters exist
    // we wouldn't want any of them to be `null` or `undefined`
    // validations can be further extended to check e.g. if they
    // all start with `RO` or contain the standard amount of characters
    // of an IBAN
    // the null-check for now is enough
    
    // if this were an API endpoint,
    // given one of the following null-checks fail,
    // the API should respond with status code 400 Bad Request
    if (!transferDetails) {
        throw new Error('Transfer details should exist.');
    }

    if (!transferDetails.sourceIban) {
        // throw an Error if something is not right logic-wise
        throw new Error('Source IBAN should exist.');
    }

    if (!transferDetails.destinationIban) {
        throw new Error('Destination IBAN should exist.');
    }

    if (!transferDetails.amount) {
        throw new Error('Amount should exist.');
    }

    if (!transferDetails.beneficiaryName) {
        throw new Error('Beneficiary name should exist.');
    }

    // `.findIndex` is an Array method that basically finds the
    // index of the element for which the callback returns `true`
    // more about Array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
    const sourceAccountIdx = accounts.findIndex((account) => {
        return account.iban === transferDetails.sourceIban;
    });

    const destinationAccountIdx = accounts.findIndex((account) => {
        return account.iban === transferDetails.destinationIban;
    });

    if (sourceAccountIdx === -1) {
        throw new Error('Source IBAN does not exist in the database.');
    }

    if (destinationAccountIdx === -1) {
        throw new Error('Destination IBAN does not exist in the database.');
    }

    if (accounts[destinationAccountIdx].holderName !== transferDetails.beneficiaryName) {
        throw new Error('Beneficiary name does not match the name of the destination account holder.');
    }

    // check if the source account has balance to transfer the money
    if (accounts[sourceAccountIdx].balance < transferDetails.amount) {
        throw new Error('Insufficient balance.');
    }
    
    // perform the mutations
    accounts[sourceAccountIdx].balance -= transferDetails.amount;
    accounts[destinationAccountIdx].balance += transferDetails.amount;

    // we chose not to return anything right now
    // if this were an API endpoint, it could respond with 200 OK if everything was fine
}

// we exported this function so that we can also use it in
// 5-js-async
module.exports = transfer;