/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import p1 from '../assets/images/producto/1.jpg';
import p2 from '../assets/images/producto/2.png';
import p3 from '../assets/images/producto/3.jpg';
import p4 from '../assets/images/producto/4.jpg';
import p5 from '../assets/images/producto/5.jpg';
import p6 from '../assets/images/producto/6.jpg';
import p7 from '../assets/images/producto/7.jpg';
import p8 from '../assets/images/producto/8.jpg';
import p9 from '../assets/images/producto/9.jpg';
import p10 from '../assets/images/producto/10.jpg';
import p11 from '../assets/images/producto/11.png';
import p12 from '../assets/images/producto/12.jpg';
import p13 from '../assets/images/producto/13.jpg';
import p14 from '../assets/images/producto/14.jpg';
import p15 from '../assets/images/producto/15.jpg';
import b1 from '../assets/images/bbs/5matyb1.jpg';
import b2 from '../assets/images/bbs/5matyb2.jpg';
import b3 from '../assets/images/bbs/benicio1.jpg';
import b4 from '../assets/images/bbs/benicio2.jpg';
import b5 from '../assets/images/bbs/benicio3.jpg';
import b6 from '../assets/images/bbs/editadafran.jpg';
import b7 from '../assets/images/bbs/editadafran1.jpg';
import b8 from '../assets/images/bbs/editadafran2.jpg';
import b9 from '../assets/images/bbs/editadafran3.jpg';
import e1 from '../assets/images/emb/5maternidad3.jpg';
import e2 from '../assets/images/emb/agos1.jpg';
import e3 from '../assets/images/emb/agos2.jpg';
import e4 from '../assets/images/emb/agos5.jpg';
import e5 from '../assets/images/emb/d.jpeg';
import e6 from '../assets/images/emb/d1.jpeg';
import e7 from '../assets/images/emb/d3.jpeg';
import e8 from '../assets/images/emb/debo1-9.jpg';
import e9 from '../assets/images/emb/debo1-28.jpg';
import e10 from '../assets/images/emb/debo1-36.jpg';
import e11 from '../assets/images/emb/n1.jpeg';
import e12 from '../assets/images/emb/n2.jpeg';
import e13 from '../assets/images/emb/n3.jpg';
import e14 from '../assets/images/emb/sol1.jpg';
import e15 from '../assets/images/emb/sol2.jpg';
import e16 from '../assets/images/emb/sol3.jpg';
import e17 from '../assets/images/emb/sol4.jpg';
import ev1 from '../assets/images/eventos1/1.jpg';
import ev2 from '../assets/images/eventos1/2.jpg';
import ev3 from '../assets/images/eventos1/3.jpg';
import ev4 from '../assets/images/eventos1/4.jpg';
import ev5 from '../assets/images/eventos1/5.jpg';
import ev6 from '../assets/images/eventos1/6.jpg';
import ev7 from '../assets/images/eventos1/7.jpg';
import ev8 from '../assets/images/eventos1/8.jpg';
import ev9 from '../assets/images/eventos1/9.jpg';
import ev10 from '../assets/images/eventos1/10.jpg';
import ev11 from '../assets/images/eventos1/11.jpg';
import ev12 from '../assets/images/eventos1/12.jpg';
import ev13 from '../assets/images/eventos1/13.jpg';
import ev14 from '../assets/images/eventos1/14.jpg';
import fp1 from '../assets/images/FP1/7urbano3.jpg';
import fp2 from '../assets/images/FP1/7urbano5.jpg';
import fp3 from '../assets/images/FP1/orgullo-11.jpg';
import fp4 from '../assets/images/FP1/orgullo-12.jpg';
import fp5 from '../assets/images/FP1/orgullo-13.jpg';
import fp6 from '../assets/images/FP1/orgullo-15.jpg';
import fp7 from '../assets/images/FP1/orgullo.jpg';
import './Servicios.css';

function checkDesc(tipo) {
  if (tipo === 'FP') {
    return 'FOTOPERIODISMO';
  }
  if (tipo === 'EMB') {
    return 'EMBARAZADAS/BEBES';
  }
  if (tipo === 'PR') {
    return 'PRODUCTOS';
  }
  if (tipo === 'EV') {
    return 'EVENTOS';
  }
}
function checkLink(tipo) {
  if (tipo === 'FP') {
    return '/fotoperiodismo';
  }
  if (tipo === 'PR') {
    return '/productos';
  }
  if (tipo === 'EMB') {
    return '/embebes';
  }
  if (tipo === 'EV') {
    return '/eventos';
  }
}

const data = [
  {
    id: 1,
    image: p1,
    category: 'Producto',
  },
  {
    id: 2,
    image: p2,
    category: 'Producto',
  },
  {
    id: 3,
    image: p3,
    category: 'Producto',
  },
  {
    id: 4,
    image: p4,
    category: 'Producto',
  },
  {
    id: 5,
    image: p5,
    category: 'Producto',
  },
  {
    id: 6,
    image: p6,
    category: 'Producto',
  },
  {
    id: 7,
    image: p7,
    category: 'Producto',
  },
  {
    id: 8,
    image: p8,
    category: 'Producto',
  },
  {
    id: 9,
    image: p9,
    category: 'Producto',
  },
  {
    id: 10,
    image: p10,
    category: 'Producto',
  },
  {
    id: 11,
    image: p11,
    category: 'Producto',
  },
  {
    id: 12,
    image: p12,
    category: 'Producto',
  },
  {
    id: 13,
    image: p13,
    category: 'Producto',
  },
  {
    id: 14,
    image: p14,
    category: 'Producto',
  },
  {
    id: 15,
    image: p15,
    category: 'Producto',
  },
  {
    id: 16,
    image: b1,
    category: 'Bebes',
  },
  {
    id: 17,
    image: b2,
    category: 'Bebes',
  },
  {
    id: 18,
    image: b3,
    category: 'Bebes',
  },
  {
    id: 19,
    image: b4,
    category: 'Bebes',
  },
  {
    id: 20,
    image: b5,
    category: 'Bebes',
  },
  {
    id: 21,
    image: b6,
    category: 'Bebes',
  },
  {
    id: 22,
    image: b7,
    category: 'Bebes',
  },
  {
    id: 23,
    image: b8,
    category: 'Bebes',
  },
  {
    id: 24,
    image: b9,
    category: 'Bebes',
  },
  {
    id: 26,
    image: e2,
    category: 'Bebes',
  },
  {
    id: 27,
    image: e3,
    category: 'Bebes',
  },
  {
    id: 28,
    image: e4,
    category: 'Bebes',
  },
  {
    id: 29,
    image: e5,
    category: 'Bebes',
  },
  {
    id: 30,
    image: e6,
    category: 'Bebes',
  },
  {
    id: 31,
    image: e7,
    category: 'Bebes',
  },
  {
    id: 32,
    image: e8,
    category: 'Bebes',
  },
  {
    id: 33,
    image: e9,
    category: 'Bebes',
  },
  {
    id: 34,
    image: e10,
    category: 'Bebes',
  },
  {
    id: 35,
    image: e11,
    category: 'Bebes',
  },
  {
    id: 36,
    image: e12,
    category: 'Bebes',
  },
  {
    id: 37,
    image: e13,
    category: 'Bebes',
  },
  {
    id: 38,
    image: e14,
    category: 'Bebes',
  },
  {
    id: 39,
    image: e15,
    category: 'Bebes',
  },
  {
    id: 40,
    image: e16,
    category: 'Bebes',
  },
  {
    id: 41,
    image: e17,
    category: 'Bebes',
  },
  {
    id: 42,
    image: ev1,
    category: 'Eventos',
  },
  {
    id: 43,
    image: ev2,
    category: 'Eventos',
  },
  {
    id: 44,
    image: ev3,
    category: 'Eventos',
  },
  {
    id: 45,
    image: ev4,
    category: 'Eventos',
  },
  {
    id: 46,
    image: ev5,
    category: 'Eventos',
  },
  {
    id: 47,
    image: ev6,
    category: 'Eventos',
  },
  {
    id: 48,
    image: ev7,
    category: 'Eventos',
  },
  {
    id: 49,
    image: ev8,
    category: 'Eventos',
  },
  {
    id: 50,
    image: ev9,
    category: 'Eventos',
  },
  {
    id: 51,
    image: ev10,
    category: 'Eventos',
  },
  {
    id: 52,
    image: ev11,
    category: 'Eventos',
  },
  {
    id: 53,
    image: ev12,
    category: 'Eventos',
  },
  {
    id: 54,
    image: ev13,
    category: 'Eventos',
  },
  {
    id: 55,
    image: ev14,
    category: 'Eventos',
  },
  {
    id: 56,
    image: fp1,
    category: 'FP',
  },
  {
    id: 57,
    image: fp2,
    category: 'FP',
  },
  {
    id: 58,
    image: fp3,
    category: 'FP',
  },
  {
    id: 59,
    image: fp4,
    category: 'FP',
  },
  {
    id: 60,
    image: fp5,
    category: 'FP',
  },
  {
    id: 61,
    image: fp6,
    category: 'FP',
  },
  {
    id: 62,
    image: fp7,
    category: 'FP',
  },
];
const covers = [
  {
    id: 1,
    image: fp7,
    category: 'FP',
  },
  {
    id: 2,
    image: b1,
    category: 'EMB',
  },
  {
    id: 3,
    image: p3,
    category: 'PR',
  },
  {
    id: 4,
    image: ev2,
    category: 'EV',
  },
];

export default function Servicios() {
  // const [images, setImage] = useState(data);
  const [portadas, setImage] = useState(covers);

  const allItem = () => {
    const finalData = data.filter((value) => value);
    setImage(finalData);
  };

  const onlyPython = (categoryItem) => {
    const finalData = data.filter((value) => value.category === categoryItem);

    setImage(finalData);
  };
  const onlyOffice = (categoryItem) => {
    const finalData = data.filter((value) => value.category === categoryItem);

    setImage(finalData);
  };
  const onlyReact = (categoryItem) => {
    const finalData = data.filter((value) => value.category === categoryItem);
    setImage(finalData);
  };

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };
  return (
    /*
    <>
      <div className="gallery2">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-primary" onClick={allItem}>
              <a className="Texto"> Todo </a>
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => onlyPython('Producto')}
            >
              <a className="Texto">Producto</a>
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => onlyOffice('Bebes')}
            >
              <a className="Texto"> Bebes/Embarazadas</a>
            </button>
          </div>

          <div className="col-3">
            <button
              className="btn btn-primary"
              onClick={() => onlyReact('Eventos')}
            >
              <a className="Texto"> Eventos</a>
            </button>
          </div>
          <div className="col-3">
            <button className="btn btn-primary" onClick={() => onlyReact('FP')}>
              <a className="Texto"> Fotoperiodismo</a>
            </button>
          </div>
        </div>
      </div>
*/
    <>
      <div className="gallery3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {portadas.map((item, index) => (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div
              className="pics2"
              key={index}
              onClick={() => getImg(item.image)}
            >
              <div className="cont">
                <Link to={checkLink(item.category)}>
                  <img src={item.image} style={{ width: '100%' }} />
                  <div className="centered">{checkDesc(item.category)}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
