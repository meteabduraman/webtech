import { useState } from 'react';

const API_BASE_URL = 'https://bank-api-fltw.onrender.com';
const JWT = '-- see instructions on how to get a JWT to place here in the README.md --';

// the params of this function are actually the props
export function PhoneNumber({ user }) {
    const [error, setError] = useState(undefined);
    const [startedChangeProcess, setStartedChangeProcess] = useState(false);
    const [orderId, setOrderId] = useState('');

    function startChangeProcess() {
        // we use the setter to tweak the state
        // now we should render the phone number input
        setStartedChangeProcess(true);
    }

    async function submitForm(e) {
        // the page wants to refresh, we disable that this way
        e.preventDefault();

        // e.target is actually the <form> element
        // more about FormData https://developer.mozilla.org/en-US/docs/Web/API/FormData
        // there are many other ways to do this
        const formData = new FormData(e.target);

        // we're now calling the PATCH method to update the phone number
        // which will provide us an order ID
        const response = await fetch(`${API_BASE_URL}/users/me/phone-number`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JWT}`,
            },
            // we need to manually convert the object to JSON
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        // handling the nasty case, where the API request might fail
        if (!response.ok) {
            setError(new Error(`Response failed with status code ${response.status}`));
            return;
        }

        // if successful, we look in the body
        // for the order ID
        const body = await response.json();

        setOrderId(body.orderId);
        return;
    }

    // nasty case first
    if (error) {
        return (
            <div>
                <p>An error occurred</p>
                <p>{error.message}</p>
            </div>
        )
    }

    // the order of the next 2 ifs
    // matter in this approach
    // we can find better ways to switch
    // between these screens later
    if (orderId) {
        return (
            <div>
                <h1>Change your phone number</h1>
                <p>Your order is was processed under ID {orderId}</p>
                <p>You will need to approve this order in order for your change to take effect</p>
            </div>
        )
    }

    if (startedChangeProcess) {
        return (
            <div>
                <h1>Change your phone number</h1>
                <p>Enter the phone number below, including the international prefix.</p>

                {/* by default the event data is passed as parameter
                to this function `submitForm`, this is available for all event handlers */}
                <form onSubmit={submitForm}>
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input name="phoneNumber" placeholder="+40700000000"></input>

                    {/* when a `type="submit"` button is within a form,
                    a click on it will trigger the submission event
                    we handle on the form element with onSubmit */}
                    <button type="submit">Next</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <h1>Change your phone number</h1>
            <p>some long description about this process</p>

            <p>{user?.name}'s current phone number:</p>
            <p>{user?.phoneNumber}</p>

            {/* when the user clicks on this button,
            the function passed there gets executed */}
            <button onClick={startChangeProcess}>Change</button>
        </div>
    )
}