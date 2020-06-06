import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navbar from "../components/navbar/Navbar"
import Flex from "./Flex"

const Wrapper = styled.header`
  background-color: transparent;
`

const StyledDiv = styled(Flex)`
  height: 10vh;
  max-width: 1080px; 
  margin: 0 auto;
  padding: 20px 0;
`

const Header = () => (
  <Wrapper>
    <StyledDiv justifyContent="flex-end" alignItems="center">
      <Navbar />
    </StyledDiv>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
