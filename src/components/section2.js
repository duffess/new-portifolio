import React, { useState } from 'react';
import '../css-c/section2.css';
import ImgEu from "../assets/imgs/Novo Projeto.webp"

export default function Main() {

    const [hovered, setHovered] = useState(false)

    return (
        <div className='mainSection2'>

            <div className='PaiSobreMim' >
                <h1>Sobre Mim</h1>
                <div></div>
            </div>


            <div className='PaiTextosImg'>

                
            <img src={ImgEu} alt="Imagem de Guilherme" />


            <div className='textos'>

                <h2>Olá! Eu sou Guilherme Duffes</h2>
                <h3>Desenvolvedor Front-End</h3>
                <div className='DivDescricao'>
                    <span>Sou um desenvolvedor Front-End especializado em React, com experiência em desenvolvimento web e práticas modernas. Sou proficiente em HTML, CSS, JavaScript e ferramentas de compilação. Comprometido em entregar projetos de alta qualidade e inovadores.</span>
                </div>
                <div className='texto1'>

                    <p> Data de Nascimento &nbsp; | &nbsp; 11 de Janeiro de 2004 </p>
                    <p> Telefone &nbsp; | &nbsp; +55 21 971235386 </p>
                    <p> Email &nbsp; | &nbsp; guilherme.duffes@al.infnet.edu.br </p>
                    <p> Idiomas &nbsp; | &nbsp; Português/Inglês </p>
                    <p> Freelance &nbsp; | &nbsp; Disponível </p>

                </div>

            </div>
            </div>

        </div>
    );
}
