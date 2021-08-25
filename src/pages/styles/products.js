import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";

export const ProductsWrapper = styled(Wrapper)`
  margin-top: 4em;
  margin-bottom: 4em;
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  gap: 2em 4em;
`;
