/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import fp1 from '../assets/images/FP1/7urbano3.jpg';
import fp2 from '../assets/images/FP1/7urbano5.jpg';
import fp3 from '../assets/images/FP1/orgullo-11.jpg';
import fp4 from '../assets/images/FP1/orgullo-12.jpg';
import fp5 from '../assets/images/FP1/orgullo-13.jpg';
import fp6 from '../assets/images/FP1/orgullo-15.jpg';
import fp7 from '../assets/images/FP1/orgullo.jpg';
import '../components/Gallery.css';

export default function LGBT() {
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
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
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
