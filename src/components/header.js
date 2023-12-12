import React from 'react';
import { useState } from 'react';
import '../css-c/header.css';
import IconHome from '../assets/SVGS/home.svg'
import IconSkills from '../assets/SVGS/skills.svg'
import IconSuitCase from '../assets/SVGS/suitcase.svg'
import IconBooks from '../assets/SVGS/books.svg'

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
            <a href='#home'> <img className='svgNav' src={IconHome}/> </a>
            <a href='#projects'> <img className='svgNav' src={IconSkills}/> </a>
            <a href='#catalog'> <img className='svgNav' src={IconSuitCase}/> </a>
            <a href='#contactUs'> <img  className='svgNav' src={IconBooks}/> </a>
          </div>
        </div>
      </div>
    </div>
  );
}
