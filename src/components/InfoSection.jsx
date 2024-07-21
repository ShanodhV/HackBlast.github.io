import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;

    div {
      max-width: 300px;
      padding: 1rem;
      background: ${props => props.theme.colors.cardBackground};
      border-radius: 8px;
      box-shadow: 0 2px 4px ${props => props.theme.colors.cardShadow};
    }
  }
`;

const InfoSection = () => (
  <InfoContainer id="about">
    <h2>About HackBlast 1.0</h2>
    <p>HackBlast 1.0 is a hackathon organized by the IEEE Student Branch at CINEC Pvt Ltd. Join us for an exciting event filled with innovation and creativity.</p>
    <div>
      <div>
        <h3>Workshops</h3>
        <p>Participate in various workshops to enhance your skills.</p>
      </div>
      <div>
        <h3>Networking</h3>
        <p>Meet and connect with like-minded individuals and industry experts.</p>
      </div>
      <div>
        <h3>Prizes</h3>
        <p>Win exciting prizes and showcase your talents.</p>
      </div>
    </div>
  </InfoContainer>
);

export default InfoSection;
