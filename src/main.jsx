import {Provider} from 'react-redux'
import {store} from './app/store.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/components/header.css";
import "./styles/components/footer.css";
import "./styles/components/hero.css";
import "./styles/components/features.css";
import "./styles/components/signInContent.css";
import "./styles/components/userContent.css";
import "./styles/pages/signIn.css";
import "./styles/pages/user.css";
import "./index.css";
import "./styles/components/modal.css"; 

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
