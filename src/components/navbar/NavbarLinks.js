import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  font-family: sans-serif;
  -ms-font-family: sans-serif;
  font-weight: 200;
  -ms-font-weight: 200;
  text-decoration: none;
  color: #666;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0vh;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(230, 110, 65);
    height: 4px;
    transition: all 0.5s ease-in;
  }

  :hover {
    color: white;
    ::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">George And The Bear</NavItem>
      <NavItem to="/shop">Aanbod</NavItem>
      <NavItem to="/updates">Updates</NavItem>
      <NavItem to="/about">Over ons</NavItem>
    </>
  )
}

export default NavbarLinks