import React from 'react'
import ReactDom from 'react-dom/client'
import 'modern-normalize'
import './index.css'
import App from './App/App'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
