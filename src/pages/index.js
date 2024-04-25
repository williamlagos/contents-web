import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Card, CardHeader, CardBody, CardFooter } from "grommet"
import { Main, Heading, Paragraph, Box, Image, Button } from "grommet"
import { Favorite, ShareOption } from "grommet-icons"


import labsOutline from "../assets/svg/labs_outline.svg"
import rocketImage from "../assets/svg/rocket.svg"
import hexagonLogo from "../assets/svg/hubpro.svg"
import dinamoImage from "../assets/svg/new.svg"
import githubImage from "../assets/svg/github.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Main background="#eee">
      <Box margin="large" align="center">
        <Box height="small" width="medium" align="center">
          <Image fit="contain" alt="Labs logo" src={labsOutline} />
        </Box>
        <Heading level={2} margin="small">The next inspiration starts here.</Heading>
        <Paragraph fill margin="none">The Labs is a space for experimental projects</Paragraph>
      </Box>
    </Main>


    <Box wrap justify="center" direction="row" margin="large">
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">
          <Image fit="contain" src={rocketImage} alt="Rocket launch" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Apollo</Heading>
          <Paragraph>Landing Page and CMS Project.</Paragraph> 
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain" src={hexagonLogo} alt="Labs logo" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Learning</Heading>
          <Paragraph>Design and Development Courses.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain"src={dinamoImage} alt="Dinamo figure" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Dinamo</Heading>
          <Paragraph>Adventure Game in side-scrolling.</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      <Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain" src={githubImage} alt="Pomodorino Logo" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Pomodorino</Heading>
          <Paragraph>Application developed for Android, iOS and Web</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>
      {/*<Card basis="medium" margin="small" background="light-1">
        <CardHeader size="medium">  
          <Image fit="contain" src={githubImage} alt="Weather Station Logo" />
        </CardHeader>
        <CardBody pad="medium">
          <Heading level={3} margin="none">Weather Station</Heading>
          <Paragraph>Weather Station Platform developed with Arduino and for Android, iOS and Web</Paragraph>
        </CardBody>
        <CardFooter pad={{horizontal: "small"}} background="light-2">   
          <Button icon={<Favorite color="red" />} hoverIndicator />
          <Button icon={<ShareOption color="plain" />} hoverIndicator />
        </CardFooter>
      </Card>*/}
    </Box>

  </Layout>
)

export default IndexPage
