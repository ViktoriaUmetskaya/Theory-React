import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/pages/nav-style.css';

function Navigation(){
    return(
        <div>
            <nav className='nav'>
                <ul className='nav-cont'>
                    <li><Link to='/component'>Components</Link></li>
                    <li><Link to='/props'>Props</Link></li>
                    <li><Link to='/state'>State</Link></li>
                    <li><Link to='/lifecycle'>Lifecycle</Link></li>
                    <li><Link to='/event'>Events</Link></li>
                    <li><Link to='/key'>Key</Link></li>
                    <li><Link to='/refs'>Refs</Link></li>
                    <li><Link to='/async'>Async</Link></li>
                    <li><Link to='/virtual-dom'>Virtual Dom</Link></li>
                    <li><Link to='/fragment'>Fragment</Link></li>
                    <li><Link to='/react-memo'>React memo</Link></li>
                    <li><Link to='/useEffect'>UseEffect</Link></li>
                    <li><Link to='/routers'>Routers</Link></li>
                    <li><Link to='/context'>Context</Link></li>
                    <li><Link to='/form'>Form</Link></li>
                    <li><Link to='/Theory-React'>Hа главную</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;