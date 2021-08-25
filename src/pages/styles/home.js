import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";

export const Hero = styled.div`
  img {
    width: 100vw;
    object-fit: cover;
    height: 400px;
    position: relative;
  }
  div {
    color: var(--black);
    position: absolute;
    top: 150px;
    left: 400px;
    z-index: 9999;
    color: white;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    align-items: flex-end;
    p {
      margin: 0;
      margin-top: 1em;
    }
    button {
      width: 50%;
      margin: 0;
      margin-left: 4em;
      background-color: var(--yellow);
      transition: 450ms all;
      :hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
`;

export const WrapperAbout = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2em;
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
`;

export const MessageWrapper = styled(Wrapper)`
  text-align: center;
  margin-top: 6em;
  p {
    width: 80%;
    margin: 0 auto;
    font-size: 50px;
    color: var(--yellow);
    letter-spacing: 10px;
  }
  div {
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4em;
  }
`;
