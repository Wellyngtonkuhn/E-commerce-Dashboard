import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 425px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  border-radius: 10px;
  background-color: #fff;

  @media screen and (min-width: 425px) {
    width: 45%;
  }

  @media screen and (min-width: 768px) {
    width: 20%;
  }

  @media screen and (min-width: 1024px) {
    width: 23%;
  }
`;

export const Row = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 0 0.5rem;
  }

  h3 {
    font-weight: 400;
    margin: 0;

    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  h4 {
    margin: 0.5rem;
  }

  button {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (min-width: 425px) {
    div {
      h3 {
        font-size: 1rem;

        span {
          font-size: 0.8rem;
        }
      }

      h4 {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      h3 {
        font-size: 1.1rem;

        span {
          font-size: 0.9rem;
        }
      }

      h4 {
        font-size: 0.9rem;
      }
    }
  }
`;
