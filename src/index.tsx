import React from 'react'
import ReactDOM from 'react-dom/client'
import { Grommet } from 'grommet'
import { App } from './components/pages'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Grommet full>
      <App />
    </Grommet>
  </React.StrictMode>
)
