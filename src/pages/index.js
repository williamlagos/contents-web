import React from "react"
import { Box, TextInput, Image, Text, Heading, Button } from "grommet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import factImage from "../images/fact.svg"
import emailImage from "../images/email.svg"
import passwordImage from "../images/password.svg"
import mockupImage from "../images/mockup.png"

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
    <Box direction="row">
      <Box>
        <Box>
          <Heading level={3}>jifcam</Heading>
          <Heading margin="none"><strong>GET MORE</strong> Views</Heading>
          <Heading margin="none"><strong>COLLAB</strong> with other creators</Heading>
          <Heading margin="none"><strong>SHOWCASE</strong> your talent</Heading>
          <Heading level={2}>with<br/> Mini Vertical Videos on Jifcam</Heading>
        </Box>
        <Box direction="row">
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
      </Box>
      <Box><Image fit="contain" src={mockupImage} /></Box>
    </Box>
  </Layout>
)

export default IndexPage
