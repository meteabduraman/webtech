import { useState, useEffect } from 'react';
import './App.css';
import { PhoneNumber } from './components/PhoneNumber';
import { BrowserRouter, Routes, Route } from 'react-router';

const API_BASE_URL = 'https://bank-api-fltw.onrender.com';
const JWT = '-- see instructions on how to get a JWT to place here in the README.md --';

function App() {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  // this moved from the PhoneNumber component
  // first, let's bring in the user profile from an API
  useEffect(() => {
    // according to the swagger, this endpoint will require an Access Token
    // so we'll need to get one prior to calling it
    fetch(`${API_BASE_URL}/users/me`, {
      headers: {
        'Authorization': `Bearer ${JWT}`,
      },
    })
      .then((res) => {
        // `ok` is already found on the response object
        // it's true if the status code is between 200-299
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
        if (!res.ok) {
          throw new Error(`Response failed with status code ${res.status}`);
        }

        return res;
      })
      .then((res) => res.json())
      // according to the swagger, this endpoint responds
      // with 200 and a body with property phoneNumber
      // we want to store the entire user, not only the phone number
      // now that this call is done in the App component
      .then((body) => setUser(body))
      .catch((e) => setError(e));

    // don't forget the empty array here
    // so that the effect is only executed once
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>You're on the home route</p>}></Route>
          <Route path="phone-number" element={<PhoneNumber user={user}></PhoneNumber>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
