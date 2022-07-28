import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ user = '', }) => (
  <header
    className='header-container'
  >
    { (user === '') ? (
      <div className='title-container'>
        <span>EB</span>
        <span className='title-middle-letter'>Y</span>
        <span>TR</span>
      </div>
    ) : (
      <>
        <div className='title-container'>
          <span>EB</span>
          <span className='title-middle-letter'>Y</span>
          <span>TR</span>
        </div>
        <div className='user-container'>
          <span className='user-title'>{user}</span>
        </div>
      </>
    )}
  </header>
);

Header.propTypes = {
  user: PropTypes.string,
};

Header.defaultProps = {
  user: '',
};

export default Header;
