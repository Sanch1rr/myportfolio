import React from 'react'
import "../style/style.css"
import {Container, Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const main = () => {
  return (
    <Container>
    <Row>
      <Col>
      <div className='image'>
        <h1>IMAGE</h1>


        </div></Col>
      
    </Row>
    <Row>
      <Col><div className='intro'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium voluptatibus, minus voluptates nobis iure molestiae.</h1>
        </div></Col>
      
    </Row>
    <Row>
      <Col><div className='desc'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis beatae reiciendis quasi animi nam doloribus corporis voluptatibus alias. Exercitationem magni corporis sit ullam voluptatum delectus dolor? Soluta modi repudiandae ipsam?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, quaerat.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit.</p>
        </div></Col>
      
    </Row>
  </Container>
  )
}

export default main


