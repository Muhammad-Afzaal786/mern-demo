import React,{useState} from 'react'

import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {DataContext} from '../components/context/DataProvider'
import { useContext } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false)
    const {account} = useContext(DataContext)
    const navigate = useNavigate();
    const Logout = async () =>{
        navigate('/login');      
    }       
    const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavbar(true);
    }else{
      setNavbar(false)
    }
    }
    window.addEventListener("scroll", changeBackground)
    return (
        <>
         <nav  className={navbar ? "navbar active navbar-expand-lg fixed-top" : "navbar navbar-expand-lg fixed-top"}>
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            href="#"
            style={{ borderBottom: "1px solid #eb2f06",color:"#f1c40f" }}
          >
            <span style={{ color: "#f1c40f", fontWeight: "bolder" }}>MERN</span>{" "}
            PRofilE
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end gx-5">
              <li className="nav-item">
                <NavLink
                  className="exact nav-link"
                  exact
                  activeClassName="active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/userdata"
                >
                  UserData
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                  onClick={Logout}
                >
                 Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                 
                 
                >
                  <span style={{color:"#f1c40f"}}>{account.name}<FaUserAlt className="ms-2 align-text-top"/> </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
        // <Component>
        //     <Container>
        //        <div> <Link to='/'>HOME</Link></div>            
        //        <div>
        //        <Link className='user_name'>              
        //      <span>{account.name}</span><FaUserAlt/>             
        //        </Link>
        //        <Link to='/userdata'>Users Data</Link>   
        //        <Link to='/about'>About</Link>           
        //         <Link to='/login' onClick={Logout}>Logout</Link> 
        //        </div>
        //     </Container>
        // </Component>
    )
}

export default Header;