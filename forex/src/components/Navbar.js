import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <>
        <div className="left-menu">
          <div className="logo"> FXBiz</div>
        </div>
       <div className="right-menu">
           <div className="nav">
           <ul>
                <li>
                    <Link to="/home">HOME</Link>
                    
                    <Link to="/pack">PACKAGES</Link>
                    <Link to="/FAQ">FAQ's</Link>
                    <Link to="/Contact">CONTACT</Link>
                </li> 

            </ul>

            </div>

       </div>
        
            

        
            
        </>
    )
}
