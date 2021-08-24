import styled from "styled-components/macro";
import { FormContainer } from "../../globalStyles";

export const FormContainerRegister = styled(FormContainer)`
  width: 60%;
  max-width: 700px;
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
