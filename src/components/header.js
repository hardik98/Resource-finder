import React from 'react';
import {Link} from 'react-router-dom';



const Header = () => {
    return (

   

          <div className="main_container_header">
                
                <Link className="link_l" to = '/'>
                <img  alt="Resourse Finder" src='/images/rf.png' style={{height:"40px" ,width:"40px",position:"absolute",top:"6px"}} />
                 </Link>
                 <div className="main_header">
                <Link className="link_l" to = '/'>

                    <h2 className="mihir">Resource Finder</h2>
                    </Link>
                    <div className="login">
                    <button value="Login" onClick ={()=>alert("WE ARE WORKING ON IT...")} className="button">Login</button>
                    </div>
                 </div>
          </div>
    );
}

export default Header;