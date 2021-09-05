import styled from "styled-components/macro";

export const FooterContainer = styled.div`
  background-color: var(--black);
  color: white;
  padding: 1em 0 2em 0;
  h1 {
    margin-bottom: 2em;
  }
  button {
    margin: 0;
    padding: 1em;
    border: none;
    border-radius: 2px;
  }
  p {
    text-align: center;
    margin: 0;
    margin-top: 4em;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    flex: 0.4;
    border-radius: 2px;
  }
  button {
    margin-left: 2em;
    flex: 0.2;
    background-color: var(--yellow);
    transition: 450ms all;
    cursor: pointer;
    font-weight: bold;
  }
  div {
    flex: 0.4;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SendButton = styled.button`
  cursor: ${(props) => (props.loading ? "default" : "pointer")} !important;
  opacity: ${(props) => (props.loading ? ".5" : "1")};
`;
