import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = ({ user = '', }) => (
  <header
    className='header-container'
  >
    { (user === '') ? (
      <>
        <span>EB</span>
        <span className='title-middle-letter'>Y</span>
        <span>TR</span>
      </>
    ) : (
      <>
        <>
          <span>EB</span>
          <span className='title-middle-letter'>Y</span>
          <span>TR</span>
        </>
        <span className='user-title'>{user}</span>
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
