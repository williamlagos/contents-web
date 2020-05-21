/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box, Image, Stack, grommet } from "grommet"

import { mockupImage } from "../images/mockup.png"
import { bgImage } from "../images/bg.png"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Grommet theme={grommet}>
      <Stack anchor="right">
        <Image src={bgImage} />
        <Image src={mockupImage} />
      </Stack>
      <Box>{children}</Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
