import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Component from './Component';
import Props from './Props';
import State from './State';
import Lifecycle from './Lifecycle';
import Event from './Event';
import Key from './Key';
import Refs from './Refs';
import Async from './Async';
import VirtualDom from './VirtualDom';
import Fragment from './Fragment';
import ReactMemo from './ReactMemo';
import UseEffect from './UseEffect';
import Routers from './Router';
import Context from './Context';
import Form from './Form';
import Main from './Main'
import '../../css/pages/Content-style.css';
import Navigation from './Navigation';

function Content(){
    return(
        <div className='content'>
            <Router>
                <Navigation/>
                    <Routes>
                    <Route exact path='/Theory-React' element={<Main/>}/>
                    <Route exact path='/component' element={<Component/>} />
                    <Route exact path='/props' element={<Props/>} />
                    <Route exact path='/state' element={<State/>} />
                    <Route exact path='/lifecycle' element={<Lifecycle/>} />
                    <Route exact path='/event' element={<Event/>} />
                    <Route exact path='/key' element={<Key/>} />
                    <Route exact path='/refs' element={<Refs/>} />
                    <Route exact path='/async' element={<Async/>} />
                    <Route exact path='/virtual-dom' element={<VirtualDom/>} />
                    <Route exact path='/fragment' element={<Fragment/>} />
                    <Route exact path='/react-memo' element={<ReactMemo/>} />
                    <Route exact path='/useEffect' element={<UseEffect/>} />
                    <Route exact path='/routers' element={<Routers/>} />
                    <Route exact path='/context' element={<Context/>} />
                    <Route exact path='/form' element={<Form/>} />
                </Routes>    
            </Router>
        </div> 
    )
}

export default Content;