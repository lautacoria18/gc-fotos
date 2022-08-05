/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa';
import '../../components/Gallery.css';

import bb1 from '../../assets/images/bbs/5matyb1.jpg';
import bb2 from '../../assets/images/bbs/5matyb2.jpg';
import bb3 from '../../assets/images/bbs/editadafran.jpg';
import bb4 from '../../assets/images/bbs/editadafran1.jpg';
import bb5 from '../../assets/images/bbs/editadafran2.jpg';
import bb6 from '../../assets/images/bbs/editadafran3.jpg';

export default function Francisco() {
  const data = [
    {
      id: 1,
      imgSrc: bb1,
    },
    {
      id: 2,
      imgSrc: bb2,
    },
    {
      id: 3,
      imgSrc: bb3,
    },
    {
      id: 4,
      imgSrc: bb4,
    },
    {
      id: 5,
      imgSrc: bb5,
    },
    {
      id: 6,
      imgSrc: bb6,
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
      <Link to="/servicios/maternidad/bebes" className="goBack">
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
