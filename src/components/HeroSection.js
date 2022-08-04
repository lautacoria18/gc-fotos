import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import Ptext from './Ptext';
import NeneJpg from '../assets/images/elnene.jpeg';
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
            <Ptext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Ptext>
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
                      <a href="/productos" target="blank">
                        Ver fotos
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="container-exp">
                  <p className="text-exp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <h3 className="name-exp">Lautaro Coria</h3>
                </div>
                <div className="container-exp">
                  <p className="text-exp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </p>
                  <h3 className="name-exp">Lautaro Coria</h3>
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
