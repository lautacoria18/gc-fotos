import React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const ButtonStyle = styledComponents.div`
margin-top: 2rem;
.button {
  font-family: "Belgrano";
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};

    
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var (--gary-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};

    }
.button:hover{
  background-color: gray;
}

@media only screen and (max-width: 768px) {

    .button {
        font-size: 1.8rem;
    }
}
`;

export default function Button({ btnLink, btnText, outline }) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
