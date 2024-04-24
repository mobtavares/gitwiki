import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    font-style: normal;
    text-shadow: 5px 4px 11px rgb(0,0,0), 0 2px 5px rgb(0,0,0);
    }

    body {
        background-color: #22272E;
        color: #FFF;
    }
    
    @keyframes fadeIn {
  from {
    opacity: 0;
    //transform: translateY(10px);
    transform: translateY(10px) rotate(-1deg)
  }
  to {
    opacity: 1;
    //transform: translateY(0);
    transform: translateY(0) rotate(0deg);
  }
}

.fadeIn {
  animation: fadeIn 0.7s ease forwards;
}


`