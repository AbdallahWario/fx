import React from 'react';
import Footer from './components/footer';
import Menu from './components/Menu';


import './App.css';

import Contact from "./pages/Contact";
import Pack from "./pages/Pack";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";



import{Route} from 'react-router-dom';

function App() {
  return (
    <>

      <Menu/>
      

       <Route exact   path='/home/' component ={Home} />
       <Route exact  path='/FAQ/' component ={FAQ} />
       <Route exact  path='/pack/' component ={Pack} />
       <Route exact  path='/Contact/' component ={Contact} />
       
    <Footer/>
      
      
      
       
    </>
  );
}

export default App;
