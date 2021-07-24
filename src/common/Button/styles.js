import styled from "styled-components";

export const Button = styled.button`
  background:#ff6e00;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #ff6e00;
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? "160px" : "100%")};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? "140px" : "100%")};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? "130px" : "100%")};
  }
`;
