import React from 'react';
import { Button } from 'react-bootstrap';

export default function Contact() {
    
    return (
      <div>
      <div style={{backgroundColor:'light pink', textAlign: 'center'}}>
      <h2>Contact me!</h2>
      
          {/* Linkedin */}
          <Button variant="primary" href="https://www.linkedin.com/in/jennifer-jimenez" className='contactme'>
              Jennifer's Linkedin</Button>
          
      
          
          {/* Github */}
          <Button variant="primary" href="https://github.com/JJennifer" className='contactme'>
              Jennifer's Github</Button>
               
      
      </div>
    </div>
    );
  }