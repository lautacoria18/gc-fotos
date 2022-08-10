import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import NeneJpg from '../assets/images/Galeria/7urbano6.jpg';
import './HeroSection.css';

const HeroStyles = styledComponents.div`

.hero {
    height: 100vh;
    min-height: 1300px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;

    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Belgrano';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 1000px;
    }
    .hero__heading {
      margin-top: -200px;
      font-size: 1.4rem;
      margin-bottom: -2rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    
  }
  @media (max-width: 991px) {
    /*este es para tablet */
    .hero {
      min-height: 1650px;
    }
  }
`;
export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span className="hero__name">GC FOTOGRAFÍA</span>
          </h1>
          <div className="hero__img">
            <img src={NeneJpg} alt="" />
          </div>
          <div className="hero__info">
            <Button
              btnLink="/servicios"
              btnText="Mis servicios"
              outline={false}
            />
            <div className="experiencias">
              <h1 className="title-exp">Experiencias</h1>
              <div className="block-experiencias">
                <div className="container-exp">
                  <p className="text-exp">
                    Quisimos relanzar la línea de botines con una sesión de
                    fotos y el trabajo final superó nuestra expectativa.
                    Seguiremos trabajando con Uds para futuros lanzamientos!
                  </p>
                  <div>
                    <h3 className="name-exp">Tigan Calzado</h3>
                    <h3 className="verMas">
                      <a href="/servicios/productos/tigan">Ver fotos</a>
                    </h3>
                  </div>
                </div>
                <div className="container-exp">
                  <p className="text-exp">
                    GUADA... Muy profesional en lo que hace, muy atenta y
                    cuidadosa con los detalles. Además de ser muy amable ah la
                    hora de trabajar, le pone mucho amor y dedicación a cada
                    fotografía ❤️. SE LAS RECOMIENDO 🫶🏻!!
                  </p>
                  <h3 className="name-exp">Florencia</h3>
                </div>
                <div className="container-exp">
                  <p className="text-exp">
                    Guada, fue excelente. Estuviste en cada detalle y super
                    amable. Le dedicaste todo el tiempo a que salga todo
                    perfecto. Estoy agradecida por las hermosas fotos!
                  </p>
                  <h3 className="name-exp">Agostina</h3>
                  <h3 className="verMas">
                    <a href="/servicios/maternidad/embarazadas/agostina">
                      Ver fotos
                    </a>
                  </h3>
                </div>
              </div>
              <div className="seeMore">
                <Button
                  btnLink="/experiencias"
                  btnText="Ver más"
                  outline={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
