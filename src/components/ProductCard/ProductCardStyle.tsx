import styled from 'styled-components'

interface IProps {
  length: number
}

export const Card = styled.div<IProps>`
  width: ${({length}) => length === 1 ? '45%' : '100%'};
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // min-height: 18rem;
  padding: 0 0 0.5rem 0;
  transition: 0.3s ease-in-out;
  border-radius: 2rem;
  box-shadow: 15px 10px 50px -30px rgba(0,0,0,0.5);
  :hover{
    box-shadow: 15px 10px 50px -30px var(--blue);
  }

  @media screen and (max-width:700px){
    width: 100%;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  img{
    width: 100%;
    object-fit: cover;
    height: 20rem;
    border-radius: 2rem 0 2rem 0;
  }
`

export const FavIcon = styled.div`
  position: absolute;
  top:0.5rem;
  left: 0.5rem;
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
  padding-top: 0.5rem;
`

export const Name = styled.h3`
  color: var(--blue);
  text-align: center;
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
  margin: 0.3rem auto;
  color: var(--grey);
  font-size: var(--font-size-xl);
  font-family: var(--main-font);

`