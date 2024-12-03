import { useEffect, useState } from "react"

export function PhoneNumber() {
    // this is where we declare the state
    // things which our component depends on
    // the parameter passed to `useState` should be the default
    // value of the state variable

    // every time something changes in this state,
    // the component will rerender
    const [isLoading, setIsLoading] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(null);

    // using an effect, we can make the API call
    // and we use the setters resulted from the
    // useState call above
    useEffect(() => {
        fetch('http://localhost:3001/phone-number')
            .then(res => res.json())
            .then(body => setPhoneNumber(body.phoneNumber))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    // if we want this effect to only execute once,
    // we can pass in an empty array
    // more about this param: https://react.dev/reference/react/useEffect#useeffect
    }, []);

    // we can handle different scenarios here
    // e.g. the loading one
    // this can be more robustly done via Suspense
    // https://react.dev/reference/react/Suspense
    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    // the error/unhappy scenario
    if (error) {
        return (
            <div>
                <p>An error occurred</p>
                <p>{error.message}</p>
            </div>
        );
    }

    // the success/happy scenario
    return (
        <div>
            <h1>Change phone number</h1>
            <p>Some text here describing the process</p>

            <div className="phone-number">
                <p className="bold">Your phone number:</p>
                <p className="pre">{phoneNumber}</p>
            </div>
        </div>
    );
}