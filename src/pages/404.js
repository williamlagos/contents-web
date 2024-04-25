import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Heading, Paragraph } from "grommet"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <Heading>Not Found</Heading>
    <Paragraph>You came to a route that doesn't have a page.</Paragraph>
  </Layout>
)

export default NotFoundPage
