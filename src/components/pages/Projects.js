import {React} from 'react';
import { Button, Card, Row, Container } from 'react-bootstrap';
import ComingSoon from '../images/Screenshot 2023-06-09 at 8.13.35 PM.png'

export default function Projects() {
  return (
    <div className='projects'>
      <h1 style={{textAlign:'center', backgroundColor:'#FDF5E6'}}>Projects</h1>
     
     <Container fluid>
      <Row col-md-6>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='projects'>
        <Card.Img variant="top" src={ComingSoon} style={{maxHeight:'50vh', maxWidth:'70vh'}} />
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
            Short project description 
            </Card.Text>
            {/* put old portfolio link as filler */}
            <Button variant="primary" href="https://jjennifer.github.io/Portfolio-JJFORJENNIFER/">
            Coming Soon/Link to project</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/JJennifer"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      <Card style={{ width: '30rem', margin: '20px', display:'block' }} className='mx-auto'>
        <Card.Img variant="top" src={ComingSoon} style={{maxHeight:'50vh', maxWidth:'70vh'}}/>
          <Card.Body>
            <Card.Title>Project Title</Card.Title>
            <Card.Text>
            Short project description 
            </Card.Text>
            {/* put old portfolio link as filler */}
            <Button variant="primary" href="https://jjennifer.github.io/Portfolio-JJFORJENNIFER/">
              Coming Soon/Link to project</Button>
            <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/JJennifer"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
          </Card.Body>
      </Card>
      </Row>
      </Container>
    </div>
  );
}