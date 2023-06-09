import React from 'react';
export default function Contact() {
    
    return (
      <div>
      <div style={{backgroundColor:'light pink', textAlign: 'center'}}>
      <h5>Contact me!</h5>
  
    {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://www.linkedin.com/in/jennifer-jimenez/"
        role="button"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
  
      {/* Github */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="https://github.com/JJennifer"
        role="button"
      >
        <i className="fab fa-github"></i>
      </a>
      </div>
    </div>
    );
  }