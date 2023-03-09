import styled from "styled-components";

export const SideMenuSection = styled.section`
  min-height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  position: fixed;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }

  svg {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    a, button{
      font-size: 1rem;
    }

    a, button:hover{
      cursor: pointer;
    }

    svg{
      font-size: 1.3rem;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0;
  margin: -0.5rem 0 0 0.5rem;
`;
