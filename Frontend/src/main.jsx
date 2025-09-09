import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CaptainContext.jsx';
import SocketProvider from './context/SocketContext.jsx'; // ✅ fixed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
      <SocketProvider>
        <UserContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContext>
      </SocketProvider>
    </CaptainContext>
  </StrictMode>,
);
