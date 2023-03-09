import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem;
  margin: auto;
  display: flex;
  text-align: center;
`
export const InputContainer = styled.div`
  width: 80%;
`

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

export const AddContainer = styled.div`
  align-self: center;
  svg {
    margin: 0.5rem 0;
    font-size: var(--font-size-xl);
    color: var(--lightBlue);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    transition: 0.2s ease-in-out;
    a {
      color: var(--lightBlue);
    }
    #add_icon {
      background-color: var(--lightBlue);
      border-radius: 10px;
    }
  }
`

export const AddTitle = styled.h6`
  font-size: var(--font-size-l);
  font-family: var(--main-font);

  @media screen and (max-width: 620px) {
    font-size: var(--font-size-m);
    span {
      display: none;
    }
  }
  @media screen and (max-width: 484px) {
    span {
      display: none;
    }
  }
`
