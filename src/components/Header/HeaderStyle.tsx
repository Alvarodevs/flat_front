import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  align-items: center;
  // color: var(--lightBlue);
  margin-bottom: 1rem;
  box-shadow: 0px 5px 9px -6px var(--black);
`

export const Logo = styled.img`
  max-width: 10rem;
`

export const Title = styled.h3`
  font-size: var(--font-size-xl);
  font-family: var(--main-font);
  color: var(--blue);
  @media screen and (max-width: 600px){
    display: none;
  }
`;

export const IconsContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  svg{
    font-size: var(--font-size-xxl);
    color: var(--lightGrey);
  }
`