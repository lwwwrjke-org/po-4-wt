import styled from "styled-components";

export const HeadingStyle = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 4rem;
`;

export const LogoStyle = styled.img`
  width: 6rem;
`;

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const LabelStyle = styled.label`
  padding-bottom: 0.3em;
`;

export const InputStyle = styled.input`
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  height: 40px;
  width: 200px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;