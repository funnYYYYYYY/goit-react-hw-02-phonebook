import styled from 'styled-components';

const Container = styled.form`
  border: 1px solid black;
  display: grid;
  padding: 20px;
  width: 300px;
  height: 300px;
`;

const Label = styled.label`
  display: contents;
  height: 20px;
`;

const Input = styled.input`
  height: 25px;
  font-size: 18px;

  &:focus {
    border-top-color:none;
    border-radius:10px;
  border-color:red;
  
`;
export { Container, Label, Input };
