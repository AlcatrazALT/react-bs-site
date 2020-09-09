import React from 'react'
import { Carousel } from 'react-bootstrap'
import lake from '../static/lake.jpg'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={lake} alt="First slide" />
        <Carousel.Caption>
          <h3>Blog</h3>
          <p>React-Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={lake} alt="First slide" />
        <Carousel.Caption>
          <h3>Blog</h3>
          <p>React-Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={lake} alt="First slide" />
        <Carousel.Caption>
          <h3>Blog</h3>
          <p>React-Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
