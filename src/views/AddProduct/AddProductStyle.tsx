import styled from 'styled-components'

interface IButton {
  isClear: boolean
}

export const ContainerImageInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .file-input__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    
  }

  .file-input__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    font-size: 14px;
    padding: 10px 12px;
    background-color: var(--lightBlue);
    font-family: var(--main-font);
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    margin: 1.2rem 0;
    :hover{
      transition: 0.3s ease-in-out;
      background-color: var(--blue);
      color: var(--white);
    }
  }

  .file-input__label svg {
    height: 16px;
    margin-right: 4px;
  }
`;
export const InputImage = styled.input`
  margin-bottom: 1rem;
`;
export const Image = styled.img`
  max-width: 15rem;
`;

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
    margin-bottom: 1rem;
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
