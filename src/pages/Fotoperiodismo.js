/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Link } from 'react-router-dom';
import fp1 from '../assets/images/FP1/7urbano3.jpg';
import M8M from '../assets/images/8m/8m-24.jpg';
import MVIH from '../assets/images/vih/vih6.jpg';
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

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };
  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="" />
        <div className="closeNav">
          <MdClose onClick={() => setModel(false)} />
        </div>
      </div>
      <div className="galleryFP">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {portadas.map((item, index) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes

            <div className="contFP">
              <Link to={checkLink(item.category)}>
                <img src={item.image} style={{ width: '100%' }} />
                <div className="centered">{checkDesc(item.category)}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
