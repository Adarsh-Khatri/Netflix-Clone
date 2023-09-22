import styled from "styled-components";

export const LOGIN_CONTAINER = styled.div`
  position: relative;

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    display:grid;
    grid-template-rows: 15vh 85vh;


    .form-container {
      height: 85vh;
      
      .form {
        padding: 2rem;
        background-color: rgba(0,0,0,0.7);
        width: 25vw;
        gap: 2rem;
        color: white;
        border-radius:1rem;

        .container {

          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 100%;
          }

          button {
          background-color: #e50914;
          color:white;
          }

        }
      }
    }
  }
`;
