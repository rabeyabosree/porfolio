
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import chatReducer from './redux/chatReducer.js'
import { ToastContainer } from 'react-toastify';
const store = createStore(chatReducer)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
)

