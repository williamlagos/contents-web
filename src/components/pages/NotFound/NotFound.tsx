import { Heading, Paragraph } from 'grommet'
import { useRouteError } from 'react-router-dom'

import { Layout } from '../../templates/'

const NotFoundPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <Layout>
      <Heading>Not Found</Heading>
      <Paragraph>You came to a route that doesn't have a page.</Paragraph>
    </Layout>
  )
}

export default NotFoundPage
