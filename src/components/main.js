import React from 'react';
import '../css-c/main.css';
import lamp from '../assets/imgs/Vector.webp';

export default function Main() {
  return (
    <div className="main">
        <div className='subMain'>
            <div className='presentMyself' >
                <p className='Apre' > Hey! </p>
                <p className='Apre' > I'm Duffes.</p>
                <span> Mussum Ipsum, cacilds vidis litro abertis.  Paisis, filhis, espiritis santis. Diuretics paradis num copo é motivis de denguis. Interagi no mé, cursus quis, vehicula ac nisi. Quem num gosta di mim que vai caçá sua turmis! </span>
                <button>Ola</button>
            </div>

            <div className='imgLamp'>
                <img src={lamp} />
            </div>
        </div>
    </div>
  );
}
