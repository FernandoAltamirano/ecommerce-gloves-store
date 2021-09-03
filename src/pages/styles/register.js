import styled from "styled-components/macro";
import { FormContainer } from "../../globalStyles";

export const FormContainerRegister = styled(FormContainer)`
  width: 60%;
  max-width: 700px;
  button {
    background: var(--black);
    border: none;
    color: white;
    width: 100%;
    padding: 0.9em;
    border-radius: 2px;
    cursor: pointer;
    transition: 450ms all;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const Row = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  > div {
    width: 49%;
  }

  @media (max-width: 768px) {
    display: initial;
    > div {
      width: 100%;
    }
  }
`;
