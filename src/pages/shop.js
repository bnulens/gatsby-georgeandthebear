// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import RecordGallery from "../components/RecordGallery"

const Shop = () => (
  <Layout>
    <SEO title="George and the Bear - Shop" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <RecordGallery/>
  </Layout>
)

export default Shop
