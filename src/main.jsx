import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App modalText='Testing the modal window library!' btnCloseText='Close' />
  </React.StrictMode>,
)
