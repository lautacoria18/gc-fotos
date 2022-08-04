import React from 'react';
import './Experiencias.css';

export default function Experiencias() {
  const data = [
    {
      id: 1,
      texto:
        'Quisimos relanzar la línea de botines con una sesión de fotos y el trabajo final superó nuestra expectativa. Seguiremos trabajando con Uds para futuros lanzamientos!',
      cliente: 'Tigan Calzado',
      link: '/productos/tigan',
    },
    {
      id: 1,
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
      cliente: 'Hermanas',
      link: '/productos',
    },
    {
      id: 1,
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
      cliente: 'Hermanas',
      link: '/productos',
    },
    {
      id: 1,
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat',
      cliente: 'Hermanas',
      link: '/productos',
    },
  ];

  return (
    <div className="experiencias-page">
      {data.map((item, index) => (
        <div className="container-exp-page">
          <p className="text-exp">{item.texto}</p>
          <h3 className="name-exp">{item.cliente}</h3>
          <h3 className="verMas">
            <a href={item.link} target="blank">
              Ver fotos
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
}
