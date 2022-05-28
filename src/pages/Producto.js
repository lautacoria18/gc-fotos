/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import fp1 from '../assets/images/producto/1.jpg';
import fp2 from '../assets/images/producto/2.png';
import fp3 from '../assets/images/producto/3.jpg';
import fp4 from '../assets/images/producto/4.jpg';
import fp5 from '../assets/images/producto/5.jpg';
import fp6 from '../assets/images/producto/6.jpg';
import fp7 from '../assets/images/producto/7.jpg';
import fp8 from '../assets/images/producto/8.jpg';
import fp9 from '../assets/images/producto/9.jpg';
import fp10 from '../assets/images/producto/10.jpg';
import fp11 from '../assets/images/producto/11.png';
import fp12 from '../assets/images/producto/12.jpg';
import fp13 from '../assets/images/producto/13.jpg';
import fp14 from '../assets/images/producto/14.jpg';
import fp15 from '../assets/images/producto/15.jpg';
import '../components/Gallery.css';

export default function Producto() {
  const data = [
    {
      id: 1,
      imgSrc: fp1,
    },
    {
      id: 2,
      imgSrc: fp2,
    },
    {
      id: 3,
      imgSrc: fp3,
    },
    {
      id: 4,
      imgSrc: fp4,
    },
    {
      id: 5,
      imgSrc: fp5,
    },
    {
      id: 6,
      imgSrc: fp6,
    },
    {
      id: 7,
      imgSrc: fp7,
    },
    {
      id: 8,
      imgSrc: fp8,
    },
    {
      id: 9,
      imgSrc: fp9,
    },
    {
      id: 10,
      imgSrc: fp10,
    },
    {
      id: 11,
      imgSrc: fp11,
    },
    {
      id: 12,
      imgSrc: fp12,
    },
    {
      id: 13,
      imgSrc: fp13,
    },
    {
      id: 14,
      imgSrc: fp14,
    },
    {
      id: 15,
      imgSrc: fp15,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <Link to="/servicios" className="goBack">
        <FaArrowLeft />
      </Link>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="" />
        <div className="closeNav">
          <MdClose onClick={() => setModel(false)} />
        </div>
      </div>
      <div className="gallery">
        {data.map((item, index) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
}
