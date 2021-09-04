import styled from "styled-components/macro";

export const UploadContainer = styled.div`
  height: 120px;
  width: 120px;
`;

export const LabelUpload = styled.label`
  border: 2px dashed rgb(27, 172, 230);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 12px;
  cursor: pointer;
`;

export const ImageUploaded = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  outline: 1px solid black;
  img {
    object-fit: cover;
    width: 120px;
    height: 120px;
  }
  svg {
    position: absolute;
    color: black;
    background-color: hsla(0, 10%, 80%, 0.2);
  }
`;
