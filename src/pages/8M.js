/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
/*
import fp1 from '../assets/images/8m/8m-2.jpg';
import fp2 from '../assets/images/8m/8m-5.jpg';
import fp3 from '../assets/images/8m/8m-8.jpg';
import fp4 from '../assets/images/8m/8m-9.jpg';
import fp5 from '../assets/images/8m/8m-10.jpg';
import fp6 from '../assets/images/8m/8m-12.jpg';
import fp7 from '../assets/images/8m/8m-13.jpg';
import fp8 from '../assets/images/8m/8m-14.jpg';
import fp9 from '../assets/images/8m/8m-17.jpg';
import fp10 from '../assets/images/8m/8m-19.jpg';
import fp11 from '../assets/images/8m/8m-24.jpg';
import fp12 from '../assets/images/8m/8m-27.jpg';
import fp13 from '../assets/images/8m/8m-31.jpg';
import fp14 from '../assets/images/8m/8m-48.jpg';
import fp15 from '../assets/images/8m/8m-51.jpg';
import fp16 from '../assets/images/8m/8m-54.jpg';
import fp17 from '../assets/images/8m/8m-55.jpg';
import fp18 from '../assets/images/8m/8m-57.jpg';
import fp19 from '../assets/images/8m/8m-50.jpg';
*/
import f1 from '../assets/images/8M2/1.jpg';
import f2 from '../assets/images/8M2/2.jpg';
import f3 from '../assets/images/8M2/3.jpg';
import f4 from '../assets/images/8M2/4.jpg';
import f5 from '../assets/images/8M2/5.jpg';
import f6 from '../assets/images/8M2/6.jpg';
import f7 from '../assets/images/8M2/7.jpg';
import f8 from '../assets/images/8M2/8.jpg';
import f9 from '../assets/images/8M2/9.jpg';
import f10 from '../assets/images/8M2/10.jpg';
import f11 from '../assets/images/8M2/11.jpg';
import f12 from '../assets/images/8M2/12.jpg';
import f13 from '../assets/images/8M2/13.jpg';
import f14 from '../assets/images/8M2/14.jpg';
import f15 from '../assets/images/8M2/15.jpg';
import f16 from '../assets/images/8M2/16.jpg';
import f17 from '../assets/images/8M2/17.jpg';
import f18 from '../assets/images/8M2/18.jpg';
import f19 from '../assets/images/8M2/19.jpg';

import '../components/Gallery.css';

export default function MarchaMujer() {
  /* const data = [
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
    {
      id: 16,
      imgSrc: fp16,
    },
    {
      id: 17,
      imgSrc: fp17,
    },
    {
      id: 18,
      imgSrc: fp18,
    },
    {
      id: 19,
      imgSrc: fp19,
    },
  ];
  */
  const data2 = [
    {
      id: 1,
      imgSrc: f1,
    },
    {
      id: 2,
      imgSrc: f2,
    },
    {
      id: 3,
      imgSrc: f3,
    },
    {
      id: 4,
      imgSrc: f4,
    },
    {
      id: 5,
      imgSrc: f5,
    },
    {
      id: 6,
      imgSrc: f6,
    },
    {
      id: 7,
      imgSrc: f7,
    },
    {
      id: 8,
      imgSrc: f8,
    },
    {
      id: 9,
      imgSrc: f9,
    },
    {
      id: 10,
      imgSrc: f10,
    },
    {
      id: 11,
      imgSrc: f11,
    },
    {
      id: 12,
      imgSrc: f12,
    },
    {
      id: 13,
      imgSrc: f13,
    },
    {
      id: 14,
      imgSrc: f14,
    },
    {
      id: 15,
      imgSrc: f15,
    },
    {
      id: 16,
      imgSrc: f16,
    },
    {
      id: 17,
      imgSrc: f17,
    },
    {
      id: 18,
      imgSrc: f18,
    },
    {
      id: 19,
      imgSrc: f19,
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
      <Link to="/servicios/fotoperiodismo" className="goBack">
        <FaArrowLeft />
      </Link>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt="" />
        <div className="closeNav">
          <MdClose onClick={() => setModel(false)} />
        </div>
      </div>
      <div className="gallery">
        {data2.map((item, index) => (
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
}
