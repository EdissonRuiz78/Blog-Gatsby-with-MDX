import React from "react"
import { Container, Image, Content, Card } from "../components"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Container>
      <Image />
      <Content>
        <Card
          date="Jan 2021"
          title="First post"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
          slug="/text"
        ></Card>
      </Content>
    </Container>
  </>
)

export default IndexPage
