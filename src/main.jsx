import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Background } from './theme/background'
import { ThemeProvider } from './theme/theme-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Background>
          <App />
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
