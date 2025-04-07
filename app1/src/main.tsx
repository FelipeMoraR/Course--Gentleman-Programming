// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render( //This ! is to control the nullability of the element, if dont exist this will throw an controlled error
  //  <StrictMode>
    <App />
  //  </StrictMode>
)
