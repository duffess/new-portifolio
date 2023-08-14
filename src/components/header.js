import React from 'react';
import '../css-c/header.css';

export default function Header() {

  const TecHOLink = document.getElementById('tech');
  const NavLinks = document.getElementById('nav');



  return (
    <div className='header'>
      <div className='subheader'>
        <div className='bordaNova'>
          <div className='tech'>
            <p>TechO</p>
          </div>
          <div className='nav' >
            <a href='#home'> Home </a>
            <a href='#projects'> Projects </a>
            <a href='#catalog'> Catalog </a>
            <a href='#contactUs'> Contact us </a>
          </div>
        </div>
      </div>
    </div>
  );
}
