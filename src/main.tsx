import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Grommet } from 'grommet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Grommet full>
      <App />
    </Grommet>
  </React.StrictMode>
)
