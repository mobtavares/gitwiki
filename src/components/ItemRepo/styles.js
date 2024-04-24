import styled from "styled-components";

export const ItemContainer = styled.div `
height: auto;
width: 90%;
margin: 20px 0;


   h3 {
         font-size; 32px;
         color: #f3f3f3;
      }

      p {
         font-size; 16px;
         color: #f3f3f360;
         margin-bottom:20px
      }

     
      hr {
         border-color: #333;
         margin: 20px 0;
      }

.link {
   text-decoration: none;
         margin-right: 10px;
         
  align-items: center;
  padding: 6px 14px;
  font-family: roboto;
  border-radius: 20px;
  border: none;

  background: #6E6D70;
 
  color: #DFDEDF;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.link:hover {
   box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  outline: 0;
}
`
