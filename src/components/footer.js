import React from "react";
import '../css-c/footer.css';

export default function Main(){

    var dataAtual = new Date();

    var anoAtual = dataAtual.getFullYear();

    return (
        <div className="Footer" >
            <p> Copyright © {anoAtual} TechO, All Rights Reserved. </p>
            <br></br>
            <span>Created by Guilherme Duffes</span>
        </div>
    )
}
