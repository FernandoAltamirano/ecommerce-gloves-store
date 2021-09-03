import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  margin-top: ${(props) => (props.transparent ? "-20px" : "0")};
  background-color: ${(props) =>
    props.transparent ? "transparent" : "var(--black)"};
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
  width: ${(props) => (props.transparent ? "100%" : "70%")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: ${(props) => (props.transparent ? "100%" : "90%")};
  }
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
    width: 40px;
    border-radius: 9999px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const DisplayName = styled.p`
  color: white;
  font-size: 16px;
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
  width: ${(props) => (props.transparent ? "100%" : "70%")};
  a {
    text-decoration: none;
    color: ${(props) => (props.transparent ? "white" : "var(--black)")};
  }
  color: ${(props) => (props.transparent ? "white" : "var(--black)")};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 1em;
  padding-bottom: 1em;
  p {
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => (props.transparent ? "white" : "var(--black)")};
  }
  svg {
    margin-left: 50px;
  }
`;

export const MenuBurguer = styled.div`
  svg {
    display: none;
    @media (max-width: 768px) {
      display: initial;
    }
  }
`;

export const HeaderBottomContainer = styled.div`
  border-bottom: ${(props) =>
    props.transparent ? "" : "1px solid var(--black)"};
`;
