import React from 'react';
import '../css-c/main.css';
import lamp from '../assets/imgs/Vector.webp';

export default function Main() {
  return (
    <div className="main">
        <div className='subMain'>
            <div className='presentMyself' >
                <p className='Apre' > OLÁ, </p>
                <p className='Apre' > EU SOU <br></br> GUILHERME DUFFES</p>
                <span> Atualmente progredindo nos estudosna área de desenvolvimento no instituto Infnet, focando principalmente no desenvolvimento front-end com react e ferramentas. Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação. </span>
                <button>Ola</button>
            </div>

            <div className='imgLamp'>
                <img src={lamp} />
            </div>
        </div>
    </div>
  );
}
