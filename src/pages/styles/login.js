import styled from "styled-components/macro";
import { FormContainer } from "../../globalStyles";

export const FormContainerLogin = styled(FormContainer)`
  width: 60%;
  max-width: 500px;
`;

export const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--black);
  border: 2px solid var(--black);
  width: 100%;
  padding: 0.7em;
  border-radius: 2px;
  cursor: pointer;
  transition: 450ms all;
  font-weight: bold;
  margin-bottom: 1em;
  p {
    margin: 0;
  }
  img {
    margin-right: 10px;
  }
`;
