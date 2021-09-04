import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

const GlobalStyles = createGlobalStyle`


html{
  scroll-behavior: smooth;
}
body {
  --black:#1A1A1A;
  --yellow:#EBFF00;
  --green:#12BA03;
  --light:#f7f7f7;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body::-webkit-scrollbar-thumb{
  background-color: var(--black);
}

body::-webkit-scrollbar{
  background-color: #fbfbfb;
  width: 8px;
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
    border-radius: 2px;
  }
  
  button:hover {
    opacity: 0.5;
  }
.container{
width: 80%;
max-width: 1100px;
margin: 0 auto;
}

.disable{
  cursor: default;
  filter: grayscale(.5);
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
  cursor: ${(props) => (props.isCharging ? "default" : "pointer")};
  opacity: ${(props) => (props.isCharging ? ".5" : "1")};
`;

export const Wrapper = styled.div`
  width: 70%;
  margin: 1em auto;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export default GlobalStyles;
