import React from 'react';
import '../css-c/section.css';
import ImgReact from "../assets/imgs/react.png"
import JsImg from "../assets/imgs/js.png"
import NativeImg from "../assets/imgs/native.png"
import NodeImg from "../assets/imgs/node.png"
import ExpImg from "../assets/imgs/review.png"


export default function Main() {
  return (
    <div className='mainSection'>
        <div className="skills">
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
    </div>
  );
}
