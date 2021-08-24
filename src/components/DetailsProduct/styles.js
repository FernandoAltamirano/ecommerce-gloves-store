import styled from "styled-components/macro";

export const Box = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 7px -1px rgba(110, 103, 103, 0.65);
  padding: 16px;
`;

export const BoxAmount = styled.div`
  display: flex;
  margin: 4px 0;
  align-items: center;
`;

export const BoxColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 4px 0;
  margin-bottom: 10px;
`;

export const BoxDetails = styled.div`
  width: 100%;
  margin: 10px 50px;
`;

export const BoxDelivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const BoxIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ sizeIcon }) => sizeIcon};
  height: ${({ sizeIcon }) => sizeIcon}; ;
`;

export const BoxShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const BoxAux = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 50px;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    width: 90%;
  }
`;

export const Button = styled.button`
  margin: 0 10px 0 140px;
  width: 40%;
  height: 35px;
  background-color: #12ba03;
  border: 1px solid #12ba03;
  border-radius: 5px;
  box-shadow: 5px 5px 7px -1px rgba(110, 103, 103, 0.65);
  color: white;
  cursor: pointer;

  &:hover {
    font-size: 13px;
    width: 38%;
    height: 30px;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
  }

  @media (min-width: 1440px) {
    margin-left: 200px;
  }
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
  border: ${({ show }) => (show ? "1px solid black" : "")};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin-left: 100px;
    margin-right: 100px;
  }
`;

export const Color = styled.div`
  background-color: ${({ theme }) => theme};
  border: 1px solid black;
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  margin-bottom: ${({ marginB }) => marginB};
  text-decoration: ${({ sub }) => (sub ? "underline" : "")};
`;

export const TitleDelivery = styled.h1`
  font-size: 20px;
  text-align: left;
  width: 250px;
  margin: 0 50px;

  p {
    display: inline;
    font-size: 15px;
    color: #12ba03;
  }

  .info {
    color: black;
    font-weight: 500;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
`;

export const Description = styled.p``;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  border: 1px solid black;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const InputRadio = styled.input`
  margin-right: 12px;
  width: ${({ sizeRadio }) => sizeRadio};
  height: ${({ sizeRadio }) => sizeRadio};
`;

export const InputNumber = styled.input`
  background-color: white;
  text-align: center;
  width: 50px;
  height: 30px;
  border: 1px solid black;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin: 4px 0;
  margin-bottom: 10px;
`;
