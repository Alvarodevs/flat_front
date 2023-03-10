import styled from 'styled-components'

interface IButton {
  isClear: boolean
}

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  select{
    max-width: 8rem;
    overflow: scroll;
    font-size: var(--font-size-m);
    font-family: var(--main-font);
    border: 1px solid var(--lightBlue);
    border-radius: 5px;
  }
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem;
`;

export const Button = styled.button<IButton>`
  padding: 0.5rem 0.8rem;
  margin: 0 1rem; 
  background-color: ${({isClear}) => isClear ? 'red' : 'var(--blue)'};
  border-radius: 10px;
  color: var(--white);
  font-size: var(--font-size-l);
  border: 1px solid ${({isClear}) => isClear ? 'red' : 'var(--blue)'};
  :hover{
    transition: 0.3s ease-in-out;
    background-color: ${({isClear}) => isClear ? 'pink' : 'var(--lightBlue)'};
    color: ${({isClear}) => isClear ? 'var(--black)' : 'var(--blue)'};
    font-family: var(--secondary-font);
  }
`;
