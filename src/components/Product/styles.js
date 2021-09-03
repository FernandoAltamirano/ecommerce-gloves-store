import styled from "styled-components";

export const ProductCard = styled.div`
  border: 2px solid var(--black);
  padding: 1.5em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 30%;
  img {
    width: 100%;
    max-width: 200px;
    margin: auto;
  }
  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    margin: 0;
    margin-top: 2em;
  }
  a {
    color: var(--black);
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    font-weight: bold;

    p {
      font-size: 14px;
    }
    svg {
      width: 30px;
    }
  }

  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin: 2em auto;
  }
`;
