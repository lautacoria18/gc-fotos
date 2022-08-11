/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import { Instagram, Mail, Place } from '@material-ui/icons';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    font-family: 'Belgrano';
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contactame" subheading="Hablemos!" />
        <div className="contactSection__wrapper">
          <div className="left">
            <a href="https://www.instagram.com/fotografiagcph/" target="_blank">
              <ContactInfoItem icon={<Instagram />} text="fotografiagcph" />
            </a>
            <a href="mailto:gc.moonlight.ph@gmail.com" target="_blank">
              <ContactInfoItem
                icon={<Mail />}
                text="gc.moonlight.ph@gmail.com"
              />
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Ramos+Mej%C3%ADa,+Provincia+de+Buenos+Aires/@-34.6538888,-58.5581494,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcc7d93bab75a3:0xaafe140bc9dea3db!8m2!3d-34.6549073!4d-58.5536355"
            >
              <ContactInfoItem
                icon={<Place />}
                text="Ramos Mejía, Buenos Aires"
              />
            </a>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
