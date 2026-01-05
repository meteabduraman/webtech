import { html, reactive } from '@arrow-js/core';

const state = reactive({
  smsId: undefined,
  token: undefined,
});

async function callInitiate() {
  const input = document.getElementById('phoneNumberInput');
  const phoneNumber = input.value;

  const response = await fetch('https://bank-api-fltw.onrender.com/sms-means/auth/initiate', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ phoneNumber }),
  });

  const body = await response.json();
  state.smsId = body.smsId;
}

async function callFinalize() {
  const input = document.getElementById('smsCodeInput');
  const smsCode = input.value;

  const response = await fetch('https://bank-api-fltw.onrender.com/sms-means/auth/finalize', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // 'authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ code: smsCode, smsId: state.smsId }),
  });

  const body = await response.json();
  localStorage.setItem('token', body.token);
}

// conditional rendering
// && acts like an `if` statement, displaying the right-hand HTML template
// if the left hand term is true

html`
  ${() => state.smsId === undefined && html`
      <form>
        <label for="phoneNumber">Phone number</label>
        <input name="phoneNumber" type="tel" id="phoneNumberInput"/>
        <button type="button" @click="${callInitiate}">Submit</button>
      </form>
    `}

  ${() => state.smsId !== undefined && html`
      <form>
        <label for="smsCode">SMS Code</label>
        <input name="smsCode" type="text" id="smsCodeInput"/>
        <button type="button" @click="${callFinalize}">Finalize login</button>
      </form>
  `}
`(document.getElementById('app'))