// imagine this array is our DB
const accounts = [{
    iban: 'RO00AIEN0000000000000001',
    balance: 10,
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
function transfer(sourceIban, destinationIban, amount) {
    // first validate that that each of the parameters exist
    // we wouldn't want any of them to be `null` or `undefined`
    // validations can be further extended to check e.g. if they
    // all start with `RO` or contain the standard amount of characters
    // of an IBAN
    // the null-check for now is enough
    if (!sourceIban) {
        // throw an Error if something is not right logic-wise
        throw new Error('Source IBAN should exist.');
    }

    if (!destinationIban) {
        throw new Error('Destination IBAN should exist.');
    }

    if (!amount) {
        throw new Error('Amount should exist.');
    }

    // `.findIndex` is an Array method that basically finds the
    // index of the element for which the callback returns `true`
    // more about Array methods here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
    const sourceAccountIdx = accounts.findIndex((account) => {
        return account.iban === sourceIban;
    });

    const destinationAccountIdx = accounts.findIndex((account) => {
        return account.iban === destinationIban;
    });

    // check if the source account has balance to transfer the money
    if (accounts[sourceAccountIdx].balance < amount) {
        throw new Error('Insufficient balance.');
    }
    
    // perform the mutations
    accounts[sourceAccountIdx].balance -= amount;
    accounts[destinationAccountIdx].balance += amount;

    // we chose not to return anything right now
}

// our function call looks like below
// the parameters should be passed in the same
// order as defined in the function signature
transfer('RO00AIEN0000000000000001', 'RO00AIEN0000000000000002', 5);

// calling console.log to check if it worked or not
// we should see that the first account now has balance of 5
// and the destination balance of 45
console.log(accounts);