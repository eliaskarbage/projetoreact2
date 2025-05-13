import React from "react";
import './Colleger.css'
export default function Colleger() {

   return (
    <>
    <div className="containerCollege">
    <div>    
    <div className="cardsCollege">
        <img src="/img/college-icon-1-100x100.png" alt="icone grafico" width={50} height={50}/>
        <p>Mercado em ascensão</p>
    </div>

    <div className="cardsCollege">
        <img src="/img/empregos-100x100.png" alt="icone grafico" width={50} height={50}/>
        <p>Mais de 400 mil vagas disponíveis</p>
    </div>

    <div className="cardsCollege">
        <img src="/img/salario-100x100.png" alt="icone grafico" width={50} height={50}/>
        <p>Salários robustos de até R$ 35 mil</p>
    </div>
    </div>

    <div>
        <img className="imageCollege" src="/img/sou-colleger.png" alt="Sou Colleger"/>
    </div>
    </div>
    </>    
 )

}