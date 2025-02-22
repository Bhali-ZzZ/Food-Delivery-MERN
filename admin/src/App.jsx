// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllData from './pages/AllData/AllData';

const App = () => {

  const url = "https://food-b-backend.onrender.com" ;

  return (
    <div>
    <ToastContainer/>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>} /> {/* Corrected path */}
          <Route path='/list' element={<List url={url}/>} /> {/* Corrected path */}
          <Route path='/orders' element={<Orders url={url}/>} /> {/* Corrected path */}
          <Route path='/alldata' element={<AllData/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
