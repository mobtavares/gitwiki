import styled from "styled-components";

export const InputContainer = styled.div `
border: 1px solid #fafafa;
border-radius: 20px;
height: 62px;
width: 90%;
margin: 20px 0;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

input {
   background : transparent;
   border: none;
   width: 97.5%;
   height: 96%;
   padding: 0 20px;
   color: #fff;
   font-size: 20px;
   border-radius: 20px;

   &:hover,
    &:focus {
      outline: none;
    }
}
`