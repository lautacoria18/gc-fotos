/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import fp1 from '../assets/images/FP1/7urbano3.jpg';
import M8M from '../assets/images/8M2/11.jpg';
import MVIH from '../assets/images/vih/6.jpg';
import './Servicios.css';

function checkDesc(tipo) {
  if (tipo === 'VIH') {
    return 'MARCHA VIH';
  }
  if (tipo === '8M') {
    return 'MARCHA 8M';
  }
  if (tipo === 'LGBT') {
    return 'MARCHA LGBT';
  }
}
function checkLink(tipo) {
  if (tipo === 'VIH') {
    return '/vih';
  }
  if (tipo === 'LGBT') {
    return '/lgbt';
  }
  if (tipo === '8M') {
    return '/8m';
  }
}

const covers = [
  {
    id: 1,
    image: fp1,
    category: 'LGBT',
  },
  {
    id: 2,
    image: MVIH,
    category: 'VIH',
  },
  {
    id: 3,
    image: M8M,
    category: '8M',
  },
];

export default function Fotoperiodismo() {
  // const [images, setImage] = useState(data);
  const [portadas, setImage] = useState(covers);

  return (
    <>
      <Link to="/servicios" className="goBack">
        <FaArrowLeft />
      </Link>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {portadas.map((item) => (
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
