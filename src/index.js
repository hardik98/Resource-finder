import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter , Route} from 'react-router-dom';
import Languages from './components/languages';
import Language from './components/language';


//COMPONENTS

import Header from './components/header';
import Footer from './components/footer';




ReactDOM.render(
    
    
    
    <BrowserRouter>

       <Header /> 
      
      <div>
      <Route exact path="/" component={App} />
      <Route exact path='/languages' component={Languages} />
      <Route exact path='/language/:id' component={Language} />

      </div>
      
      <Footer />

    </BrowserRouter>
    , document.getElementById('root'));