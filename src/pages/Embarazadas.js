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

import agos from '../assets/images/emb/agos2.jpg';
import debo from '../assets/images/emb/debo1-9.jpg';
import ana from '../assets/images/emb/n1.jpeg';
import sol from '../assets/images/emb/sol2.jpg';

import './Servicios.css';

const covers = [
  {
    id: 1,
    image: agos,
    category: 'Agostina',
    link: '/embebes/embarazadas/agostina',
  },
  {
    id: 2,
    image: debo,
    category: 'Debora',
    link: '/embebes/embarazadas/debora',
  },
  {
    id: 3,
    image: ana,
    category: 'Ana',
    link: '/embebes/embarazadas/ana',
  },
  {
    id: 4,
    image: sol,
    category: 'Sol',
    link: '/embebes/embarazadas/sol',
  },
];

export default function Embarazadas() {
  // const [images, setImage] = useState(data);
  const [portadas, setImage] = useState(covers);

  return (
    <>
      <Link to="/embebes" className="goBack">
        <FaArrowLeft />
      </Link>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {portadas.map((item) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes

          <div className="cont">
            <Link to={item.link}>
              <div className="img-serv">
                <img className="imageS" src={item.image} style={{}} />
                <div className="centered">{item.category}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
