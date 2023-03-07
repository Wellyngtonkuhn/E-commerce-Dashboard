import styled from "styled-components";

export const SideMenuSection = styled.section`
  min-height: 50vh;
  background-color: #fff;
  border-radius: 10px;

  position: fixed;
  z-index: 1;

  @media screen and (min-width: 426px){
    width: 20%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  a{
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .9rem;
    color: ${({ theme }) => theme.color};
  }

  button{
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: .5rem;
    font-size: .9rem;
    font-size: .9rem;
    color: ${({ theme }) => theme.color};
  }

  svg{
    font-size: 1rem;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .3rem;
  padding: 0;
  margin: -.5rem 0 0 .5rem;
`;
