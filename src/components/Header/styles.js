import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";

export const HeaderContainer = styled.div`
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export const WrapperHeader = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 0.2;
`;
export const Center = styled.div`
  flex: 0.5;
  a {
    margin: 0 3em;
    transition: 450ms all;
    :hover {
      color: var(--yellow);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Right = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  a {
    padding: 0.5em 1em;
    margin-left: 20px;
    border-radius: 3px;
    font-weight: bold;
    background-color: var(--yellow);
    color: var(--black);
  }
`;
