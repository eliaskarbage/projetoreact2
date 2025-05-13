import React from "react";
import './Colleger.css'
import icon from '../../../public/img/college-icon-1-100x100.png';
import icon1 from '../../../public/img/empregos-100x100.png';
import icon2 from '../../../public/img/salario-100x100.png';
import image from '../../../public/img/sou-colleger.png';
export default function Colleger() {

   return (
    <>
    <div className="containerCollege">
    <div>    
    <div className="cardsCollege">
        <img src={icon} alt="icone grafico" width={50} height={50}/>
        <p>Mercado em ascensão</p>
    </div>

    <div className="cardsCollege">
        <img src={icon1} alt="icone grafico" width={50} height={50}/>
        <p>Mais de 400 mil vagas disponíveis</p>
    </div>

    <div className="cardsCollege">
        <img src={icon2} alt="icone grafico" width={50} height={50}/>
        <p>Salários robustos de até R$ 35 mil</p>
    </div>
    </div>

    <div>
        <img className="imageCollege" src={image} alt="Sou Colleger"/>
    </div>
    </div>
    </>    
 )

}