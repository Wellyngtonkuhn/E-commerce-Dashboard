import styled from "styled-components";

export const NavBarSection = styled.nav`
  width: 100%;
  height: 3rem;
  background: #fff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;

    span {
      font-weight: 700;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    h3 {
      font-size: 0.85rem;
      font-weight: 400;
      margin-top: 1rem;
    }

    button {
      background: transparent;
      border: none;
      padding: 0;
      font-size: 1rem;
    }

    @media screen and (min-width: 1024px){
      button:hover{
        cursor: pointer;
      }
    }
  }
`;
