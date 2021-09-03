import styled from "styled-components/macro";
import { Wrapper } from "../../globalStyles";

export const ProductsWrapper = styled(Wrapper)`
  margin-top: 4em;
  margin-bottom: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
