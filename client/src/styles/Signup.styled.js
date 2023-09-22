import styled from "styled-components";

export const SIGNUP_CONTAINER = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;


    .body {
      gap: 1rem;

      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }

      .form {
        display: grid;
        width: 60rem;

        .input-group{
          width:100%;
        }

        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          width:50%;
    
          &:focus {
            outline: none;
          }
        }

        button {
        background-color: #e50914;
        color:white;
      }
      }

      button {
        background-color: #e50914;
        color:white;
      }
    }
  }
`;
