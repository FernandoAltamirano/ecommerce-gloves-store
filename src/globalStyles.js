import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

const GlobalStyles = createGlobalStyle`

body {
  --black:#1A1A1A;
  --yellow:#EBFF00;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

label {
    font-size: 16px;
  }

input {
    font-size: 16px;
    box-sizing: border-box;
    padding: 0.8em;
    display: block;
    width: 100%;
    border: none;
    outline: none;
  }
  
  button{
    display: block;
    width: 100%;
    padding: 0.9em;
    font-weight: bold;
    border-radius: 3px;
  margin: 2em 0;
  border: none;
  cursor: pointer;
  transition: 450ms all;
  :hover {
    opacity: 0.5;
  }


}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
  a {
    color: var(--black);
    font-size: 16px;
    text-decoration: none;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  text-align: left;
  margin: 5px;
  font-weight: bold;
  color: red;
  p {
    margin: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 1.5em 0;
  div:first-child {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 3px;
    border: 2px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DefaultButton = styled.button`
  background-color: var(--black);
  color: white;
  padding: 1.1em 0;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 1em auto;
`;

export default GlobalStyles;
