import React from "react"
import ShopIcon from "../icons/svg/georgeandthebear.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto;
`
const StyledLogo = styled(ShopIcon)`
  display: block;
  width: 620px;
  height: 620px;
  @media (min-width: 767px) and (max-width: 1080px) and (orientation: landscape) {
    width: 60vw;
    height: 60vh;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 65vw;
    height: 65vh;
  }
  @media screen and (min-width: 320px) and (max-width: 480px){
    width: 75vw;
    height: 75vh;
  }
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <StyledLogo />
    </LogoWrap>
  )
}

export default Logo