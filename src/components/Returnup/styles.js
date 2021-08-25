import styled from "styled-components/macro";
export const Returned = styled.div`
  background-color: var(--yellow);
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 2em;
  display: ${(props) => (props.scroll === false ? "none" : "initial")};
  border-radius: 9999px;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    color: var(--white);
  }
  a {
    color: var(--black);
  }
`;
