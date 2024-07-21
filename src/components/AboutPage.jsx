import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    color: #333;
  }

  p {
    color: #666;
  }
`;

const AboutPage = () => (
  <AboutContainer>
    <h2>About HackBlast 1.0</h2>
    <p>HackBlast 1.0 is a hackathon organized by the IEEE Student Branch at CINEC Pvt Ltd.</p>
  </AboutContainer>
);

export default AboutPage;
