import React, {useEffect} from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';


function Header(props){

    let history = useHistory();

    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (

        <div>
            <div className="navbar navbar-default navbar-fixed-top navcarbox" role="navigation">   
                <div className="navbar-header">    
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="bs-example-navbar-collapse-1">    
                        <span className="icon-bar"></span>    
                        <span className="icon-bar"></span>    
                        <span className="icon-bar"></span>    
                    </button>   
                    <div style={{ margin: "0px 0px 30px 0px ", float:"left" }}>
                        <span className="navbar-brand navbar-left">
                            <Link to={'/'}>
                                LOGO
                            </Link>
                        </span>  
                    </div>
                </div>  
                    <div className="navbar-collapse collapse" id="myidname">    
                        <ul className="nav navbar-nav navbar-right">    
                            <li className={splitLocation[1] === "" ? "active" : ""}>
                                <Link className="nav-link" to="/"> Home </Link>
                            </li>
                        </ul>    
                    </div>
            </div>
        </div>
    )
}

export default Header;