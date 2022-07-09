import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const FormStyle = styled.form`
  width: 100%;
`;

function sendEmail(e) {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_rbbvvrt',
      'template_d75514p',
      e.target,
      'NxPazZDA5A6xeB69N'
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

function showsMessage() {
  alert('Mensaje Enviado con exito!');
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle
        onSubmit={(event) => {
          console.log('prueba');
          sendEmail(event);
          showsMessage();
        }}
      >
        <div className="form-group">
          <label htmlFor="name">
            Tu nombre
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required="required"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="user_email">
            Tu email
            <input
              type="email"
              id="useremail"
              name="useremail"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu consulta
            <textarea
              type="text"
              id="message"
              name="message"
              required="required"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn-send">
          Enviar
        </button>
      </FormStyle>
    </>
  );
}
