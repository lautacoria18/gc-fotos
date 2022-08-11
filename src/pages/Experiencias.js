import React from 'react';
import Ptext from '../components/Ptext';
import './Experiencias.css';

export default function Experiencias() {
  const data = [
    {
      id: 1,
      texto:
        'Quisimos relanzar la línea de botines con una sesión de fotos y el trabajo final superó nuestra expectativa. Seguiremos trabajando con Uds para futuros lanzamientos!',
      cliente: 'Tigan Calzado',
      link: '/servicios/productos/tigan',
    },
    {
      id: 1,
      texto:
        'GUADA... Muy profesional en lo que hace, muy atenta y cuidadosa con los detalles. Además de ser muy amable ah la hora de trabajar, le pone mucho amor y dedicación a cada fotografía ❤️. SE LAS RECOMIENDO 🫶🏻!!',
      cliente: 'Florencia',
      link: '',
    },
    {
      id: 1,
      texto:
        'Guada, fue excelente. Estuviste en cada detalle y super amable. Le dedicaste todo el tiempo a que salga todo perfecto. Estoy agradecida por las hermosas fotos!',
      cliente: 'Agostina',
      link: '/servicios/maternidad/embarazadas/agostina',
    },
    {
      id: 1,
      texto: 'Guada, muy cómoda, detallista y conforme. 😘 Saludos',
      cliente: 'Sol',
      link: '/servicios/maternidad/embarazadas/sol',
    },
  ];

  return (
    <div className="experiencias-page">
      {data.map((item, index) => (
        <div className="container-exp-page">
          <Ptext className="text-exp">{item.texto}</Ptext>
          <h3 className="name-exp">{item.cliente}</h3>
          <h3 className="verMas">
            <a href={item.link}>Ver fotos</a>
          </h3>
        </div>
      ))}
    </div>
  );
}
