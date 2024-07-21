import React from 'react';
import styled from 'styled-components';

const SponsorsContainer = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.primary};
  text-align: center;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    img {
      max-width: 150px;
      max-height: 100px;
    }
  }
`;

const SponsorsSection = () => (
  <SponsorsContainer>
    <h2>Our Sponsors</h2>
    <div>
      <img src="/path/to/sponsor1-logo.png" alt="Sponsor 1" />
      <img src="/path/to/sponsor2-logo.png" alt="Sponsor 2" />
      <img src="/path/to/sponsor3-logo.png" alt="Sponsor 3" />
    </div>
  </SponsorsContainer>
);

export default SponsorsSection;
