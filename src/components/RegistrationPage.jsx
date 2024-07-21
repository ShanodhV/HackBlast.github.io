import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input, textarea {
      margin: 0.5rem 0;
      padding: 0.5rem;
      width: 300px;
      border: 1px solid ${props => props.theme.colors.secondary};
      border-radius: 4px;
      background: ${props => props.theme.colors.cardBackground};
      color: ${props => props.theme.colors.secondary};
    }

    button {
      padding: 0.5rem 1rem;
      background: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const RegistrationPage = () => (
  <FormContainer id="register">
    <h2>Register for HackBlast 1.0</h2>
    <form>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Why do you want to join?" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </FormContainer>
);

export default RegistrationPage;
