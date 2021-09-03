import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";
export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 5px;
  h1 {
    margin-top: 1em;
    font-style: italic;
  }
  h2 {
    margin-top: 1em;
  }
  p {
    margin: 1em 0;
  }
  select {
    width: 30%;
    height: 2em;
    border-radius: 2px;
    border: 1px solid var(--black);
  }
`;

export const BoxAmount = styled.div`
  /* display: flex; */
  margin: 20px 0 4px 0;
  align-items: center;
  justify-content: space-between;
  div {
    /* display: flex; */
    align-items: center;
    justify-content: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BoxDetails = styled.div`
  flex: 0.7;
  border-radius: 4px;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ sizeIcon }) => sizeIcon};
  height: ${({ sizeIcon }) => sizeIcon}; ;
`;

export const BoxShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.4;
  border-radius: 4px;
`;

export const BoxAux = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: var(--green);
  /* border-radius: 3px; */
  color: white;
  cursor: pointer;
  padding: 1em 0;
  border: none;
  font-weight: bold;
  transition: 450ms all;
  margin: 3em 0;
  width: 85%;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
  border: ${({ show }) => (show ? "1px solid black" : "")};
`;

export const Container = styled(Wrapper)`
  & > div {
    margin-top: 2em;
    display: grid;
    grid-template-columns: 60% auto;
    column-gap: 3em;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  & a {
    color: var(--black);
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  margin: 1em 0;
  font-size: 24px;
  margin-bottom: ${({ marginB }) => marginB};
  text-decoration: ${({ sub }) => (sub ? "underline" : "")};
`;

export const Image = styled.img`
  width: 50%;
  border-radius: 3px;
`;

export const Item = styled.label`
  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 100px;
  margin-top: 1em;
  input {
    margin-right: 10px;
    width: 10px;
  }
`;

export const InputNumber = styled.input`
  width: 30%;
  height: 2em;
  border: 1px solid var(--black);
  padding: 0.3em;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 4px 0;
  margin-bottom: 10px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  div {
    display: flex;
    margin-left: 2em;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      padding: 1em;
      margin: 1px;
    }
  }
`;
