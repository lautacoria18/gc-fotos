/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { useHistory, Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';

import b from '../assets/images/bbs/benicio3.jpg';
import e from '../assets/images/emb/n3.jpg';

import './Servicios.css';

function checkDesc(tipo) {
  if (tipo === 'BEBE') {
    return 'BEBES';
  }
  if (tipo === 'EMBARAZADA') {
    return 'EMBARAZADAS';
  }
}
function checkLink(tipo) {
  if (tipo === 'BEBE') {
    return '/embebes/bebes';
  }
  if (tipo === 'EMBARAZADA') {
    return '/embebes/embarazadas';
  }
}

const covers = [
  {
    id: 1,
    image: b,
    category: 'BEBE',
  },
  {
    id: 2,
    image: e,
    category: 'EMBARAZADA',
  },
];

export default function Embebes() {
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
              <div className="img-serv">
                <img className="imageS" src={item.image} style={{}} />
                <div className="centered">{checkDesc(item.category)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
