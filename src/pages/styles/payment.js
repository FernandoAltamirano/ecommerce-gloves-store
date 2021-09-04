import styled from "styled-components/macro";

export const PaymentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--light);
  text-align: center;
  display: block;
  overflow: hidden;
`;
export const Payment = styled.div`
  box-sizing: content-box;
  width: 60%;
  height: 100vh;
  margin: 3em auto 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & > div {
    width: 100%;
    & > div > div {
      border-radius: 3px;
      background-color: white;
      & > div:first-child {
        padding: 2em 6em;
        border-bottom: 10px solid var(--light);
      }
    }
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  max-height: 120px;
  overflow-y: auto;
  padding: 0 20px;
  &::-webkit-scrollbar {
    background-color: #fafafa;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 10px;
  }
`;

export const Logo = styled.div`
  padding-top: 4em;
`;

export const PaymentInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--light);
  width: 47%;
  margin: 1em 0;
  input {
    ::placeholder {
      font-weight: normal;
      font-size: 14px;
    }
  }
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaymentButton = styled.div`
  background-color: #24a19c;
  color: white;
  width: 100px;
  padding: 5px 15px;
  border-radius: 3px;
  margin-top: 1em;
  opacity: ${(props) => (props.loading ? ".5" : "1")};
  cursor: ${(props) => (props.loading ? "default" : "pointer")};
`;
