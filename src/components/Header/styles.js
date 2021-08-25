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
  justify-content: space-between;
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

export const DropDown = styled.div`
  background-color: var(--black);
  width: 100px;
  border: 1px solid red;
  p {
    color: white;
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
