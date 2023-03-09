import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const Label = styled.label`
  font-size: var(--font-size-m);
  margin-bottom: 0.5rem;
  
  @media screen and (min-width: 760px){
    font-size: var(--font-size-l);
  }
`

export const Input = styled.input`
  border: 1px solid var(--lightBlue);
  padding: 0.3rem;
  border-radius: 10px;
  margin: auto;

  :focus-visible{
    outline: none;
    border: 0.1rem solid var(--blue);
  }

  @media screen and (min-width: 760px){
    width:60%;
  }
`