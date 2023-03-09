import styled from 'styled-components'

export const Label = styled.label`
  font-size: var(--font-size-l);
  margin-bottom: 0.5rem;
  font-family: var(--main-font);
  @media screen and (min-width: 760px) {
    font-size: var(--font-size-xl);
  }
`

export const Input = styled.input`
  border: 1px solid var(--lightBlue);
  padding: 0.5rem;
  border-radius: 10px;
  margin: auto;
  font-size: var(--font-size-l);
  width: 80%;

  :focus-visible {
    outline: none;
    border: 0.1rem solid var(--blue);
  }
`