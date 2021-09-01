import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";
export const Box = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 16px;
`;

export const BoxAmount = styled.div`
  display: flex;
  margin: 4px 0;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const BoxColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 4px 0;
  margin-bottom: 10px;
`;

export const BoxDetails = styled.div`
  flex: 0.7;
`;

export const BoxDelivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
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
  border: 1px solid var(--green);
  border-radius: 3px;
  color: white;
  cursor: pointer;
  margin: 0;
  max-width: 150px;
  margin-right: 20px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
  border: ${({ show }) => (show ? "1px solid black" : "")};
`;

export const Container = styled(Wrapper)`
  & > div {
    margin-top: 2em;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  & a {
    color: var(--black);
    text-decoration: none;
  }
`;

export const Color = styled.div`
  background-color: ${({ theme }) => theme};
  border: 1px solid black;
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const Title = styled.h1`
  margin: 1em 0;
  font-size: 24px;
  margin-bottom: ${({ marginB }) => marginB};
  text-decoration: ${({ sub }) => (sub ? "underline" : "")};
`;

export const TitleDelivery = styled.h1`
  font-size: 20px;
  text-align: left;
  width: 250px;
  margin: 0 50px;

  p {
    display: inline;
    font-size: 15px;
    color: var(--green);
  }

  .info {
    color: black;
    font-weight: 500;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  margin-top: 1em;
`;

export const Description = styled.p``;

export const Image = styled.img`
  width: 50%;
  border: 1px solid black;
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

export const InputRadio = styled.input`
  margin-right: 5px;

  /* width: ${({ sizeRadio }) => sizeRadio}; */
  /* height: ${({ sizeRadio }) => sizeRadio}; */
`;

export const InputNumber = styled.input`
  background-color: white;
  text-align: center;
  width: 70px;
  height: 40px;
  border: 1px solid var(--black);
  border-radius: 3px;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 4px 0;
  margin-bottom: 10px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    img {
      width: 50px;
      padding: 1em;
      border: 1px solid var(--black);
      margin: 1px;
    }
  }
`;

export const ItemDelivery = styled.div`
  display: grid;
  grid-template-columns: 20% 70% auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--black);
  border-radius: 3px;
  padding: 0.5em 1em;
  margin-bottom: 10px;
  text-align: left;
  div {
    align-self: center;
  }
  svg {
    flex: 0.4;
  }
  p {
    margin: 0;
  }
  small {
    color: var(--green);
  }

  strong {
    font-size: 18px;
  }
`;
