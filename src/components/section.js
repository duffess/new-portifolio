import React, { useState } from 'react';
import { AiFillUnlock } from 'react-icons/ai';
import '../css-c/section.css';
import ImgReact from "../assets/imgs/react.png"
import JsImg from "../assets/imgs/js.png"
import NativeImg from "../assets/imgs/native.png"
import NodeImg from "../assets/imgs/node.png"
import ExpImg from "../assets/imgs/review.png"
import LightImg from "../assets/imgs/light.png"


export default function Main() {

    const [hovered, setHovered] = useState(false)

  return (
    <div className='mainSection'>
            <div className='subSkills'>
                <div className='firstSkill' >
                    <img src={ImgReact}/>
                    <div className='infos' >
                        <p>React.Js</p>
                    </div>
                </div>

                <div className='firstSkill second' >
                    <img src={JsImg}/>
                        <div className='infos' >
                         <p>JavaScript</p>
                      </div>
              </div>

             <div className='firstSkill third' >
                 <img src={NativeImg}/>
                      <div className='infos' >
                          <p>React Native</p>
                      </div>
               </div>

              <div className='firstSkill fourth' >
                  <img src={NodeImg}/>
                      <div className='infos' >
                         <p>Node.Js</p>
                      </div>
              </div>

             <div className='firstSkill fifith ' >
                 <img src={ExpImg}/>
                     <div className='infos' >
                         <p>Skill Extra</p>
                     </div>
              </div>
            </div>
            <h2 className='topProjeto' >Acompanhe abaixo um pouco dos meus projetos.</h2>
            <p className='topProjeto2' >Passe o mouse ou clique para obter mais informações!</p>
        
            <div className='paiProjetos'>
                <div className='projeto-item'>
                    <img src={LightImg}/>
                    <p>Primeiro Projeto</p>
                </div>

                <div className='projeto-item'>
                    <img src={LightImg}/>
                    <p>Segundo Projeto</p>
                </div>

                <div className='projeto-item'>
                     <img src={LightImg}/>
                    <p>Terceiro Projeto</p>
                </div>

                <div className='projeto-item'>
                  <img src={LightImg}/>   
                   <p>Quarto Projeto</p>
                </div>

                <div className='projeto-item'>
                  <img src={LightImg}/>
                 <p>Quinto Projeto</p>
                </div>
            </div>



    </div>
  );
}
