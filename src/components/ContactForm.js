import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
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
      <FormStyle onSubmit={sendEmail}>
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
        <button type="submit" onClick={showsMessage}>
          Enviar
        </button>
      </FormStyle>
    </>
  );
}
