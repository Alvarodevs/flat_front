import styled from 'styled-components'

interface IAddProductPage {
  isAddSite?: boolean
  name?: string
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

export const Input = styled.input<IAddProductPage>`
  border: 1px solid var(--lightBlue);
  padding: 0.5rem;
  border-radius: 10px;
  margin: auto;
  font-size: var(--font-size-l);
  max-width: ${({isAddSite, name}) => isAddSite && name === 'name' ? '70%' : '80%'};
  width: ${({isAddSite, name}) => isAddSite && name !== 'description' ? '35%' : '80%'};
  margin-bottom: 1rem;
  text-align: ${({isAddSite}) => isAddSite ? 'center' : 'start'};
  :focus-visible {
    outline: none;
    border: 0.1rem solid var(--blue);
  }
`