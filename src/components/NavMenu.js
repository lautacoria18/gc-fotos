import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react/cjs/react.production.min';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: black;
      }
    }
    a {
      display: inline-block;
      font-family: 'Belgrano';
      padding: 2rem 2rem;
      font-size: 2rem;
      color: var(--gary-1);
      outline: none;
    }
    .active {
      color: white;
    }
  }
    .mobile-menu-icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 4rem;
      cursor: pointer;
      display: none;
      outline: none;
      *{
            pointer-events: none;
      }
    }
  }
  .closeNavIcon{
    display: none;

  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item{
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems{
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      paddiong: 2rem;
      width: 90%;
      max-width: 300p;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon{
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        *{
          pointer-events: none;
        }
      }
      li{
        display: block;
        margin-bottom: 1rem;
      }
    }
    
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = React.useState(false);
  return (
    <div>
      <NavMenuStyles>
        <div
          className="mobile-menu-icon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
          <div
            className="closeNavIcon"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobremi"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Sobre mi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/servicios"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experiencias"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Experiencias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              onClick={() => SetShowNav(!showNav)}
              role="button"
              onKeyDown={() => SetShowNav(!showNav)}
              tabIndex={0}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </NavMenuStyles>
    </div>
  );
}
