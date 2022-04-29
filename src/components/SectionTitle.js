import React from 'react';
import styledComponents from 'styled-components';

const SectionTitleStyle = styledComponents.div`

text-align:center;
p{
    font-family: 'RobotoMono Regular';
    font-size: 4rem;
}
h2{
font-family: 'Montserrat Bold':;
font-size: 2rem;
margin-top: .5rem;
text-transform: uppercase;

}
@media only screen and (max-width: 768px){

    p{
        font-size:2.2rem;


    }
    h2{
        font-size:1.6rem;
    }
}
`;

export default function SectionTitle({
  subheading = 'This is subheading',
  heading = 'This is heading',
}) {
  return (
    <SectionTitleStyle>
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
