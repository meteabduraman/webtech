import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { Provider as Chakra } from './components/ui/provider.jsx';
import { store } from './state/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chakra>
      <Provider store={store}>
        <App />
      </Provider>
    </Chakra>
  </StrictMode>,
)
