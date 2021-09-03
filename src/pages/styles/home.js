import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";

export const Hero = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("https://www.saberlogistico.com.ar/wp-content/uploads/2018/11/Almacenes-1.jpg")
      no-repeat center center fixed;
  min-height: 75vh;
`;
export const PrincipalText = styled.div`
  p {
    margin-top: 4rem;
    font-size: 3rem;
    color: white;
    font-weight: bold;
  }
  button {
    background-color: var(--yellow);
    width: 30%;
    cursor: pointer;
    padding: 1em;
    border: none;
    border-radius: 2px;
    font-weight: bold;
    transition: 450ms all;
    &:hover {
      opacity: 1;
      filter: grayscale(0.8);
    }
  }
  & > div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const WrapperAbout = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    line-height: 1.5;
    margin-top: 1em;
  }
  h1 {
    color: var(--black);
    margin: 0;
  }
  div {
    text-align: left;
    margin-top: 4em;
    flex: 0.5;
  }
  div:nth-child(2) {
    text-align: right;
  }
  img {
    width: 80%;
    margin: 0;
  }
`;

export const VisionMision = styled.div`
  text-align: center;
  color: var(--black);
  h1 {
    padding-top: 1em;
  }
  p {
    width: 80%;
    margin: 2em auto 0 auto;
    padding-bottom: 2em;
    line-height: 1.5;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2em;
  margin-bottom: 6em;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  margin-top: 2em;
  border: 3px solid var(--yellow);
  border-radius: 10px;
  text-align: justify;
  padding: 1em;
  h2 {
    margin: 0;
    text-align: center;
  }
  p {
    margin-top: 1em;
    line-height: 1.5;
  }
`;
