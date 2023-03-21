import React from 'react';
import './App.css';
import Header from './js/pages/Header';
import Content from './js/pages/Content';
import Footer from './js/pages/Footer'

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header/>
      </div>
      <div className='App-content'>
        <Content/> 
      </div>
      <div className='App-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
