import React, { useState } from 'react';
import '../css-c/section2.css';
import ImgEu from "../assets/imgs/Vector_1 (1).webp"


export default function Main() {

    const [hovered, setHovered] = useState(false)

  return (
    <div className='mainSection2'>
            <img src={ImgEu}/>

            <div className='textos'>
            <h1>Sobre mim</h1>
            <div className='texto1'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco.</p>                
            </div>

            <div className='texto2'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore 
magna aliqua.</p>           
            </div>
            </div>


            
    </div>
  );
}
