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

function checkDesc(tipo) {
  if (tipo === 'CASAMIENTO') {
    return 'CIVIL';
  }
  if (tipo === 'SKYLAB') {
    return 'SKYLAB';
  }
}
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
    category: 'CASAMIENTO',
  },
  {
    id: 2,
    image: s,
    category: 'SKYLAB',
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
            <Link to={checkLink(item.category)}>
              <img className="imageS" src={item.image} style={{}} />
              <div className="centered">{checkDesc(item.category)}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
