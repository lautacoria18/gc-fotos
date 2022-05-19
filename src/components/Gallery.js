/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import Img1 from '../assets/images/Galeria/2mascotas1.jpg';
import Img2 from '../assets/images/Galeria/2mascotas2.jpg';
import Img3 from '../assets/images/Galeria/2mascotas3.jpg';
import Img4 from '../assets/images/Galeria/2mascotas4.jpg';
import Img5 from '../assets/images/Galeria/3paisajes1.jpg';
import Img6 from '../assets/images/Galeria/3paisajes2.jpg';
import Img7 from '../assets/images/Galeria/3paisajes3.jpg';
import Img8 from '../assets/images/Galeria/4naturaleza1.jpg';
import Img9 from '../assets/images/Galeria/4naturaleza3.jpg';
import Img10 from '../assets/images/Galeria/4naturaleza5.jpg';
import Img11 from '../assets/images/Galeria/4naturaleza6.jpg';
import Img12 from '../assets/images/Galeria/6retratos1.jpg';
import Img13 from '../assets/images/Galeria/6retratos2.jpg';
import Img14 from '../assets/images/Galeria/6retratos4.jpg';
import Img15 from '../assets/images/Galeria/6retratos5.jpg';
import Img16 from '../assets/images/Galeria/7urbano1.jpg';
import Img17 from '../assets/images/Galeria/7urbano2.jpg';
import Img18 from '../assets/images/Galeria/7urbano6.jpg';
import Img19 from '../assets/images/Galeria/7urbano7.jpg';
import './Gallery.css';

export default function Gallery() {
  const data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img5,
    },
    {
      id: 3,
      imgSrc: Img9,
    },
    {
      id: 4,
      imgSrc: Img13,
    },
    {
      id: 5,
      imgSrc: Img17,
    },
    {
      id: 6,
      imgSrc: Img2,
    },
    {
      id: 7,
      imgSrc: Img6,
    },
    {
      id: 8,
      imgSrc: Img10,
    },
    {
      id: 9,
      imgSrc: Img14,
    },
    {
      id: 10,
      imgSrc: Img18,
    },
    {
      id: 11,
      imgSrc: Img3,
    },
    {
      id: 12,
      imgSrc: Img7,
    },
    {
      id: 13,
      imgSrc: Img11,
    },
    {
      id: 14,
      imgSrc: Img15,
    },
    {
      id: 15,
      imgSrc: Img19,
    },

    {
      id: 16,
      imgSrc: Img4,
    },
    {
      id: 17,
      imgSrc: Img8,
    },
    {
      id: 18,
      imgSrc: Img12,
    },
    {
      id: 19,
      imgSrc: Img16,
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
