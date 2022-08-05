/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import '../../components/Gallery.css';

import emb1 from '../../assets/images/emb/sol1.jpg';
import emb2 from '../../assets/images/emb/sol2.jpg';
import emb3 from '../../assets/images/emb/sol3.jpg';
import emb4 from '../../assets/images/emb/sol4.jpg';

export default function Sol() {
  const data = [
    {
      id: 1,
      imgSrc: emb1,
    },
    {
      id: 2,
      imgSrc: emb2,
    },
    {
      id: 3,
      imgSrc: emb3,
    },
    {
      id: 4,
      imgSrc: emb4,
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
      <Link to="/servicios/maternidad/embarazadas" className="goBack">
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
          // eslint-disable-next-line react/jsx-no-comment-textnodes, jsx-a11y/click-events-have-key-events
          <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </>
  );
}
