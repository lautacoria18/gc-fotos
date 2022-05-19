/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

import { Link } from 'react-router-dom';
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
    return '/bebes';
  }
  if (tipo === 'EMBARAZADA') {
    return '/embarazadas';
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

            <div className="contBB">
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
