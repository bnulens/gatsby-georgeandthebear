import React from "react"
import ShopIcon from "../icons/svg/georgeandthebear.svg"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  flex: 0 1 38px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <ShopIcon width="580" height="580" />
    </LogoWrap>
  )
}

export default Logo