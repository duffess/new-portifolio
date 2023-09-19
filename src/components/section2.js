import React, { useState } from 'react';
import '../css-c/section2.css';
import ImgEu from "../assets/imgs/Vector_1 (1).webp"


export default function Main() {

    const [hovered, setHovered] = useState(false)

  return (
    <div className='mainSection2'>
      <div className='Sobremim'>
      <h1>SOBRE MIM </h1>

      </div>

      <div className='FotoComTexto' >
            <img src={ImgEu}/>

            <div className='textos'>

              <h2>Hi There! I'm Guilherme Duffes</h2>
              <h3>Front-end Developer</h3> 
              <div className='DivDescricao' >
              <span>I am a highly skilled Front-End Developer specializing in the React library. With extensive experience in web development, I excel in utilizing React best practices and staying updated with the latest industry trends. Proficient in HTML, CSS, JavaScript, and compilation tools, I am dedicated to delivering top-notch and cutting-edge projects. My commitment to quality and innovation sets me apart and makes me a valuable asset to any team.</span>
              </div>
              <div className='texto1'>

                <p> Birthday  &nbsp;  &nbsp; | &nbsp;  &nbsp; January 11, 2004 </p>
                <p> Phone  &nbsp;  &nbsp; | &nbsp;  &nbsp; + 55 21 971235386 </p>
                <p> Email  &nbsp;  &nbsp; | &nbsp;  &nbsp; guilherme.duffes@al.infnet.edu.br </p>
                <p> Language  &nbsp;  &nbsp; | &nbsp;  &nbsp; Portuguese/English</p>
                <p> Freelance  &nbsp;  &nbsp; | &nbsp;  &nbsp; Avaliable </p>
              
              </div>
            
            </div>
      </div>


            
    </div>
  );
}
