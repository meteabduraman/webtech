import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAccounts } from "../state/slices/accounts.js";
import { Button } from '@chakra-ui/react';
import './TransferMoney.css';

localStorage.setItem('token', '-- JWT goes here --');

// this is the nullish coalescing operator ??
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// it's basically shorthand for:
// .getItem('token') ? .getItem('token') : ''
const token = localStorage.getItem('token') ?? '';

export function TransferMoney() {
    const accounts = useSelector((state) => state.accounts.value);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://bank-api-fltw.onrender.com/accounts', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(res => res.json())
        .then(body => dispatch(setAccounts(body.accounts)));
    }, []);

    function formatAccountType(type) {
        switch(type) {
            case 'current_account':
                return 'Current account';
            default:
                return '';
        }
    }

    return (
        <div>
            <h1>Transfer Money</h1>
            <p>Submit a payment and confirm it. In case you're sending money to another Webtech@CSIE Bank account, the money will arrive instantly. Otherwise, we guarantee the transfer will be booked by the end of the day. Regardless, no commissions apply. Check your available balances below. 💸</p>

            <div className="accounts-container">
                {accounts.map(account => (
                    // React demands all list items have a key
                    // You'll probably see an error in the console if not
                    // A key makes it easier for react to compute if there
                    // are any changes one of the items
                    <div className="account" key={account.id}>
                        <div className="left-side">
                            <p className="bold">{formatAccountType(account.type)}</p>
                            <p className="pre">{account.iban}</p>
                        </div>
                        <p className="bold">{account.balance} {account.currency}</p>
                    </div>
                ))}
            </div>

            <Button>Proceed</Button>
        </div>
    );
}