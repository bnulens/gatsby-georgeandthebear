// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import RecordList from "../components/RecordList"

const Shop = () => (
  <Layout>
    <SEO title="George and the Bear - Shop" />
    <h1>Shop</h1>
    <p>Ons groot aanbod aan LP</p>
    <Link to="/">&lt; Ga terug</Link>
    <RecordList />
  </Layout>
)

export default Shop
