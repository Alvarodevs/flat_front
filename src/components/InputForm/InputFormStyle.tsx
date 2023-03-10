import styled from 'styled-components'

interface IAddProductPage {
  isAddSite: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Label = styled.label<IAddProductPage>`
  font-size: ${({isAddSite}) => isAddSite ? 'var(--font-size-m)' : 'var(--font-size-l)'};
  margin-bottom: 0.5rem;
  font-family: var(--main-font);
  text-align: center;
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
  margin-bottom: 1rem;
  :focus-visible {
    outline: none;
    border: 0.1rem solid var(--blue);
  }
`