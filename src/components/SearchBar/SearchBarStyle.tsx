import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Label = styled.label`
  font-size: var(--font-size-l);
  margin-bottom: 0.5rem;
  
  @media screen and (min-width: 760px){
    font-size: var(--font-size-xl);
  }
`

export const Input = styled.input`
  border: 1px solid var(--lightBlue);
  padding: 0.5rem;
  border-radius: 10px;
  margin: auto;
  font-size: var(--font-size-l);
  width:60%;

  :focus-visible{
    outline: none;
    border: 0.1rem solid var(--blue);
  }

  @media screen and (min-width: 760px){
    width:60%;
  }
`