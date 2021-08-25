import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 1em 3em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--yellow);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  p {
    margin: 0;
  }
  p:first-child {
    font-size: 26px;
  }
  p:nth-child(2) {
    font-size: 60px;
    font-weight: bold;
  }
  p:nth-child(3) {
    font-size: 30px;
    text-align: center;
  }
`;
