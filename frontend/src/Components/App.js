// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Login from '../Components/Login'
import axios from 'axios';


function App() {
  const getAdmin = async() =>{
    const response = await axios.get('http://localhost:7777/api/login')
    .then((response)=>{
      console.log("from app.js",response.data);
    })
    .catch((err)=>{
      console.log("err while getting thru axios",err)
    })
  }

  return (
    <Router>
      <Routes>
        <Route path='/home' element=
        { 
          <>
            <Navbar />
            <Home getAdmin={getAdmin}/>
          </>
         
         
        }>

        </Route>

        <Route path='/' element=
        { 
          <>
          <Login />
          </>
        }>

        </Route>

      </Routes>
    </Router>
  );
}

export default App;
