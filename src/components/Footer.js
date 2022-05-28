import React from 'react';
import gmail from '../assets/images/gmail2.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <p className="col-sm">
          &copy;{new Date().getFullYear()} DESARROLLADA POR LAUTARO CORIA|
          <a href="mailto:lautarocoria97@gmail.com">
            <img className="gmailogo" src={gmail} alt="go" height="10" />
          </a>
          :lautarocoria97@gmail.com
        </p>
      </div>
    </div>
  );
}
