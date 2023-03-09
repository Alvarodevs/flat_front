import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 18rem;
  padding: 0 0 0.5rem 0;
  transition: 0.3s ease-in-out;
  border-radius: 2rem;
  box-shadow: 15px 10px 50px -30px rgba(0,0,0,0.5);
  :hover{
    box-shadow: 15px 10px 50px -30px var(--blue);
  }
`

export const ImgContainer = styled.div`
  max-width: 200px;
  img{
    max-width: inherit;
  }
`

export const FavIcon = styled.div`
  position: absolute;
  top:0.5rem;
  left: 9.5rem;
  width: fit-content;
  padding: 0.2rem;
  background-color: var(--white);
  border-radius: 5rem;
  display: flex;
  color: #d1d1d1;
  transition: 0.3s ease-in-out;
  :hover{
    background-color: var(--lightGrey);
  }
  svg{
    font-size: var(--font-size-xxl);
    color: var(--blue);
  }
`

export const InfoContainer = styled.div`
  position: relative;
  height: 17rem;
  padding-top: 0.5rem;
`

export const Name = styled.h3`
  color: var(--blue);
  text-align: center;
  padding: 0.5rem 0;
  font-family: var(--secondary-font);
  font-weight: 300;
`

export const Description = styled.p`
  padding: 0.2rem;
  text-align: center;
  font-family: var(--secondary-font);
  font-weight: 200;
`

export const Price = styled.p`
  position: absolute;
  bottom: 0.5rem;
  color: var(--grey);
  font-size: var(--font-size-xl);
  font-family: var(--main-font);

`