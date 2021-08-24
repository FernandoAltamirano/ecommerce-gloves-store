import styled from "styled-components/macro";
import { FormContainer } from "../../globalStyles";

export const FormContainerLogin = styled(FormContainer)`
  width: 60%;
  max-width: 500px;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--black);
  border: 2px solid var(--black);
  p {
    margin: 0;
  }
  img {
    margin-right: 10px;
  }
`;
