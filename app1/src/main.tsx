// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { GlobalProvider } from './context/global.contex.tsx';

createRoot(document.getElementById('root')!).render( //This ! is to control the nullability of the element, if dont exist this will throw an controlled error
  //  <StrictMode>
  <GlobalProvider>
    <App />
  </GlobalProvider>
    
  //  </StrictMode>
)
