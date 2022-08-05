/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import p3 from '../assets/images/producto/3.jpg';
import b1 from '../assets/images/bbs/5matyb1.jpg';
import ev2 from '../assets/images/eventos1/2.jpg';
import fp7 from '../assets/images/FP1/orgullo.jpg';
import './Servicios.css';

const covers = [
  {
    id: 1,
    image: fp7,
    category: 'FOTOPERIODISMO',
    link: '/servicios/fotoperiodismo',
  },
  {
    id: 2,
    image: b1,
    category: 'MATERNIDAD',
    link: '/servicios/maternidad',
  },
  {
    id: 3,
    image: p3,
    category: 'PRODUCTOS',
    link: '/servicios/productos',
  },
  {
    id: 4,
    image: ev2,
    category: 'EVENTOS',
    link: '/servicios/eventos',
  },
];

export default function Servicios() {
  // const [images, setImage] = useState(data);
  const [portadas, setImage] = useState(covers);

  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {portadas.map((item) => (
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
