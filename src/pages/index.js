import * as React from "react"

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
