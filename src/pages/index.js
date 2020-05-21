import React from "react"
import { Box, TextInput, Image, Text, Heading, Button } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import factImage from "../images/fact.svg"
import emailImage from "../images/email.svg"
import passwordImage from "../images/password.svg"

const Fact = ({text, number}) => (
  <Box direction="column">
    <Image alignSelf="start" src={factImage} alt="Fact" />
    <Heading level={4}>Fact #{number}</Heading>
    <Text>{text}</Text>
  </Box>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <Heading level={3}>jifcam</Heading>
      <Heading><strong>GET MORE</strong> Views</Heading>
      <Heading><strong>COLLAB</strong> with other creators</Heading>
      <Heading><strong>SHOWCASE</strong> your talent</Heading>
      <Heading level={2}>with<br/> Mini Vertical Videos on Jifcam</Heading>
    </Box>
    <Box>
      <Fact number={1} text="Vertical video viewing has increased by 277% in the last year"/>
      <Fact number={2} text="Short videos are 97% more likely to be watched entirely"/>
      <Fact number={3} text="Easily Get started by importing videos directly from your Youtube channel"/>
    </Box>
    <Box>
      <Box direction="row">
        <TextInput icon={<Image src={emailImage}/>} placeholder="E-mail" />
        <TextInput icon={<Image src={passwordImage}/>} placeholder="Password" />
      </Box>
      <Button primary label="Get Started" />
    </Box>
  </Layout>
)

export default IndexPage
