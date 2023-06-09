import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


export default function About() {
    return (
      <div>
        <h1 style={{textAlign: 'center', backgroundColor:'#FDF5E6', color: 'black'}}>About Me</h1>
        <div>
        <Container>
        <Row>
          <Col>
          <p>Place Holder for Image</p>
          </Col>
          <Col>
            <p style={{fontFamily: 'serif'}}>
              <p>Welcome to my portfolio!</p>
              <p>Hello, my name is Jennifer and I am a fullstack developer. I attended the Georgia Institute of Technology Full Stack Bootcamp.
                Before obtaining this certification, I attended GSU to obtain my bachelor degrees in Marketing and Business Administration. 
                I still love what I studied but I feel like I can accomplish more by adding coding to my skills. 
              </p>
             
            </p>
          </Col>
        </Row>
        </Container>
        </div>
      </div>
    );
  }