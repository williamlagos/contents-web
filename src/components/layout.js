/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box, grommet } from "grommet"

import bgImage from "../images/bg.png"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <Grommet theme={grommet}>
      <Box background={`url(${bgImage})`}>
        {children}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
