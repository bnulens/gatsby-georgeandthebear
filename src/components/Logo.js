import React from "react"
import ShopIcon from "../icons/svg/georgeandthebear.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto;
`
const StyledLogo = styled(ShopIcon)`
  display: block;
  height: auto;
  width: 420px;
  @media screen and (min-width: 767px) and (max-width: 992px) {
    width: 520px;
  }
  @media screen and (min-width: 413px) and (max-width: 767px) {
    width: 380px;
  }
  @media screen and (min-width: 374px) and (max-width: 413px) {
    width: 320px;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: 280px;
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