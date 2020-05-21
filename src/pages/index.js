import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import factImage from "../images/fact.svg"

const Fact = ({text, number}) => (
  <div>
    <img src={factImage} alt="Fact" />
    <h4>Fact #{number}</h4>
    <p>{text}</p>
  </div>
)

const Input = ({text, icon}) => (
  <>
    <img src={icon} alt="Icon"></img>
    <input placeholder={text}></input>
  </>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>jifcam</h3>
    <h1><strong>GET MORE</strong> Views</h1>
    <h1><strong>COLLAB</strong> with other creators</h1>
    <h1><strong>SHOWCASE</strong> your talent</h1>
    <h2>with<br/> Mini Vertical Videos on Jifcam</h2>
    <Fact number={1} text="Vertical video viewing has increased by 277% in the last year"/>
    <Fact number={2} text="Short videos are 97% more likely to be watched entirely"/>
    <Fact number={3} text="Easily Get started by importing videos directly from your Youtube channel"/>
    <Input text={"E-mail"} />
    <Input text={"Password"} />
    <button>Get Started</button>
  </Layout>
)

export default IndexPage
