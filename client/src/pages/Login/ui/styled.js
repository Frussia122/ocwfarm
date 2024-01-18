import styled from "styled-components";


export const Wrapper = styled.section`
  position: absolute;
  width: 30%;
  top: 30%;
  background: white;
  border: 1px solid white;
  padding: 50px 20px;
  border-radius: 10px;
  left: 35%;
  color: black;
  overflow: hidden;
  &::after {
    content: "";
    transform: rotate(-50deg);
    position: absolute;
    background: black;
    top: 60px;
    left: -126px;
    width: 400px;
    height: 10px;
  }
`;

