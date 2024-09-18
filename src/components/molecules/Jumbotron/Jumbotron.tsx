import React from 'react'

interface JumbotronProps {
  title: string
  content: string
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, content }) => (
  <div className="jumbotron">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

export default Jumbotron
