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

import benicio from '../assets/images/bbs/benicio3.jpg';
import bauti from '../assets/images/bbs/bauti2.jpg';
import francisco from '../assets/images/bbs/editadafran3.jpg';

import './Servicios.css';

const covers = [
  {
    id: 1,
    image: benicio,
    category: 'Benicio',
    link: '/embebes/bebes/benicio',
  },
  {
    id: 2,
    image: francisco,
    category: 'Francisco',
    link: '/embebes/bebes/francisco',
  },
  {
    id: 3,
    image: bauti,
    category: 'Bautista',
    link: '/embebes/bebes/bauti',
  },
];

export default function Embebes() {
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
