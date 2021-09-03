import styled from "styled-components/macro";

export const CheckoutListContainer = styled.div`
  flex: 0.6;
  width: 100%;
  overflow-y: auto;
  margin: 2em 2em 0 0;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  tr {
    height: 50px;
  }
`;

export const NameProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
  align-items: center;
  text-align: center;
  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  a {
    font-weight: bold;
    background-color: var(--yellow);
    color: var(--black);
    margin-top: 30px;
    border-radius: 4px;
    padding: 1em 2em;
    text-decoration: none;
    cursor: pointer;
    transition: 450ms all;
    :hover {
      opacity: 0.5;
    }
  }
`;
