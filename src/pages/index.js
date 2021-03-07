import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "../components/Dashboard"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Dashboard />
  </Layout>
)

export default IndexPage
