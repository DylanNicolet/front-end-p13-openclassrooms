import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './routes/App';
import Homepage from './routes/Homepage';
import Login from './routes/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Profile from './routes/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='/' element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path='profile' element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
