import React from 'react';
import styledComponents from 'styled-components';
import Button from '../components/Button';
import Ptext from '../components/Ptext';
import SectionTitle from '../components/SectionTitle';
import AboutImg from '../assets/images/about-sec-img.png';

const AboutSectionStyle = styledComponents.div`
padding: 9rem 0;
.container{
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  text-align: left;
}
.aboutSection__left,
.aboutSection__right {
  flex: 1;
  padding: 10px 50px 30px 0;
}
.section-title{
  text-align: left;
}
.para{
  margin-top: 2rem;
  margin-left: 0;
}
.aboutSection__buttons{
  display: flex;
  align-items: center;
  justify-content: center;

}

@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .aboutSection__left{
    order: 2;
  }
  .aboutSection__right {
    width: 100%;
    order: 1;
  }
  .aboutSection__right {
    margin-top: 3rem;
  }
  .section-title {
    text-align: center;
  }
  .para {
    margin: 0 auto;
    margin-top: 2rem;
  }
  .aboutSection__buttons {
    flex-direction: column;
    gap: 0rem;
    .button-wrapper,
    a {
      width: 100%;
      text-align: center;
    }
  }
}


`;

export default function Sobremi() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <img src={AboutImg} alt="" />
        </div>
        <div className="aboutSection__right">
          <SectionTitle
            className="section-title "
            subheading="Sobre mí"
            heading=""
          />
          <Ptext>Guadalupe Cassarino.</Ptext>
          <Ptext>Fotógrafa Argentina nacida en Buenos Aires.</Ptext>
          <Ptext>
            Me acerque a la fotografía por hobby, siendo mí principal interés
            los paisajes y la naturaleza viva.
          </Ptext>{' '}
          <Ptext>
            Comencé mí formación a través de cursos y luego continué mis
            estudios en el Centro Argentino Fotográfico (Escuela CAF). Siendo mí
            título "EXPERTA EN TÉCNICAS FOTOGRÁFICAS" y con mención de honor por
            la fotografía "SOMBRAS".
          </Ptext>{' '}
          <Ptext>
            Actualmente me dedico a la fotografía de embarazadas, new born y
            niños.
          </Ptext>
          <Ptext>
            En cada sesión, priorizo el bienestar y la comodidad de la persona
            para conseguir resultados casuales que quedarán guardados como un
            buen recuerdo.
          </Ptext>
          <div className="aboutSection__buttons">
            <Button btnLink="/Servicios" btnText="Mis servicios" />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  );
}
