import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";
import { Link } from "react-router-dom";

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
  margin-right: 2em;
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
  flex: 0.4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
  &:nth-child(2) a {
    padding: 0.5em 1em;
    margin-left: 20px;
    border-radius: 3px;
    font-weight: bold;
    background-color: var(--yellow);
    color: var(--black);
  }
  img {
    width: 50px;
    border-radius: 9999px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const DisplayName = styled.p`
  color: white;
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoginButton = styled(Link)`
  background-color: var(--yellow);
  margin: 0;
  border-radius: 3px;
  padding: 10px 15px;
`;

export const HeaderBottom = styled(Wrapper)`
  a {
    text-decoration: none;
  }
  color: var(--black);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  p {
    margin-right: 10px;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
  }
  svg {
    margin-left: 20px;
  }
`;
