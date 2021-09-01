import styled from "styled-components/macro";

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Right = styled.div`
  flex: 0.4;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: initial;
  }
`;

export const SaleDetails = styled.div`
  border: 1px solid var(--black);
  border-radius: 4px;
  h2 {
    margin: 0;
  }
`;
export const Discount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input,
  button {
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
  }
  input {
    border: 2px solid var(--black);
  }
  button {
    padding: 15px 10px;
    background-color: var(--green);
    color: white;
  }
`;

export const Details = styled.div`
  padding: 0 1em;
  margin: 0;
`;
export const SubtotalRow = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 1em;
  margin-bottom: 2em;
  p {
    margin: 0;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SaleButton = styled.button`
  width: 70%;
  margin: 2em auto;
  background-color: var(--green);
  color: white;
  font-size: 16px;
  padding-top: 7px;
  padding-bottom: 7px;
  cursor: ${(props) => (props.disable ? "default" : "pointer")};
`;
