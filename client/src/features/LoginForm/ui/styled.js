import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'IBM Plex Mono', monospace;

`;
export const Input = styled.input`
  padding: 5px 15px;
  margin-top: 25px;
  position: relative;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  color: black;
  transition: all 0.2s linear;
  box-shadow: -5px 0 0 0 white inset;

  &:focus {
    color: blue;
    border-bottom: 2px solid blue;
    box-shadow: -5px 0 0 0 white inset, 0 2px 0 blue;
  }
`;
export const Button = styled.button`
    cursor: pointer;
    padding: 10px 45px;
    border-radius: 10px;
    background: black;
    color: white;
    margin-top: 25px;
    transition: all .4s linear;
    &:hover{
      color: white;
      background: blue;
    }
`;