import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 HackBlast 1.0 - CINEC Pvt Ltd IEEE Student Branch</p>
  </FooterContainer>
);

export default Footer;
