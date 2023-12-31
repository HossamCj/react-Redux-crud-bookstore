import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logInOut } from './store/authSlice'



const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { error } = useSelector((state) => state.books)
  
  const dispatch = useDispatch()

  
  
  return (
    <Fragment>
      {
        error && (
          <div className="alert alert-danger mb-0" role="alert">
            { error }
          </div>
        )
      }
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button 
          className={
            `btn ${
              isLoggedIn ?
              'btn-danger text-white' :
              'btn-success'
            }`
          }
          type='submit'
          onClick={ () => dispatch(logInOut()) }
        >
          {
            isLoggedIn ? 'Logout' : 'Login'
          }
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;