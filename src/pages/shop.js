// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Flex from "../components/Flex"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import RecordList from "../components/RecordList"

const PageHead = styled(Flex)`
  max-width: 1080px;
  padding: 32px;
  border-top: 2px solid black;
  border-bottom: 2px solid black; 
`

const Shop = () => (
  <Layout>
    <SEO title="George and the Bear - Shop" />
    <PageHead justifyContent="space-between" alignItems="center">
      <Link to="/">&lt; Go Back</Link>
      <h1>Shop</h1>
      <Link to="/">Go To &gt;</Link>
    </PageHead>
    <RecordList />
  </Layout>
)

export default Shop
