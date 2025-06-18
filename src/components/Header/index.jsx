import React from 'react';
import logo from '../../assets/argentBankLogo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img src={logo} className='main-nav-logo-image' alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      
      <div className='user-in'>
        {user ? (
          <>
            <NavLink className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser} className='fa fa-user-circle'/>
              {user.userName} 
            </NavLink>
            <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} className='fa fa-sign-out'/>
              Sign Out 
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} className='fa fa-user-circle'/>
            Sign In 
          </NavLink>
          )
        }
      </div>      
    </nav>
  );
};

export default Header;