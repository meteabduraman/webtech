import { reactive, html } from "@arrow-js/core";

const state = reactive({
  foodLevel: 0,
  waterLevel: 0,
});

html`
  <ul>
    <li>Food level: ${() => state.foodLevel} out of 100</li>
    <li>Water level: ${() => state.waterLevel} out of 100</li>
  </ul>

  <button @click="${() => state.foodLevel += 10}">Give food</button>
  <button @click="${() => state.waterLevel += 10}">Give water</button>
`(document.getElementById('app'))