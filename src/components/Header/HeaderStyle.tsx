import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.2rem;
  align-items: center;
  color: var(--lightBlue);
  margin-bottom: 1rem;
  box-shadow: 0px 5px 9px -6px var(--black);
`

export const Logo = styled.img`
  max-width: 10rem;
`

export const IconsContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  svg{
    font-size: var(--font-size-xxl);
  }
`