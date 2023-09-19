import React, { useState } from 'react';
import '../css-c/section2.css';
import ImgEu from "../assets/imgs/Vector_1 (1).webp"

export default function Main() {

    const [hovered, setHovered] = useState(false)

    return (
        <div className='mainSection2'>
            <img src={ImgEu} alt="Imagem de Guilherme" />

            <div className='textos'>

                <h2>Olá! Eu sou Guilherme Duffes</h2>
                <h3>Desenvolvedor Front-End</h3>
                <div className='DivDescricao'>
                    <span>Sou um desenvolvedor Front-End altamente qualificado, especializado na biblioteca React. Com ampla experiência em desenvolvimento web, destaco-me no uso das melhores práticas do React e mantenho-me atualizado com as últimas tendências da indústria. Proficiente em HTML, CSS, JavaScript e ferramentas de compilação, estou dedicado a entregar projetos de alta qualidade e de ponta. Meu compromisso com a qualidade e inovação me diferencia e me torna um ativo valioso para qualquer equipe.</span>
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
    );
}
