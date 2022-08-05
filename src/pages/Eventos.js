/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import c from '../assets/images/eventos1/4.jpg';
import s from '../assets/images/sky/7.jpg';

import './Servicios.css';

function checkLink(tipo) {
  if (tipo === 'CASAMIENTO') {
    return '/civil';
  }
  if (tipo === 'SKYLAB') {
    return '/skylab';
  }
}

const covers = [
  {
    id: 1,
    image: c,
    category: 'NATI Y AGUS',
    link: '/servicios/eventos/natiagus',
  },
  {
    id: 2,
    image: s,
    category: 'SKYLAB',
    link: '/servicios/eventos/skylab',
  },
];

export default function Eventos() {
  // const [images, setImage] = useState(data);
  const [portadas, setImage] = useState(covers);

  return (
    <>
      <Link to="/servicios" className="goBack">
        <FaArrowLeft />
      </Link>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {portadas.map((item, index) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes

          <div className="cont">
            <Link to={item.link}>
              <div className="img-serv">
                <img className="imageS" src={item.image} style={{}} />
                <h2 className="centered">{item.category}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
