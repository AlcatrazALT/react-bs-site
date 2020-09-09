import React from 'react'
import Slider from './Slider'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import lake from '../static/lake.jpg'
import Jumbotron from './Jumbotron'

const Lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`

export const Home = () => {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lake} />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>{Lorem}</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lake} />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>{Lorem}</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={lake} />
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>{Lorem}</Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={lake} height={350} alt="lake" />
          </Col>
          <Col md={5}>
            <h2>Blog</h2>
            <p>{Lorem}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
