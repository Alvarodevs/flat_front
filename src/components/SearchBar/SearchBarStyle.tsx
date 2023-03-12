import styled from 'styled-components'

interface IProps {
  show: boolean
}

export const Container = styled.div`
  padding: 0.5rem;
  margin: auto;
  display: flex;
  text-align: center;
`
export const InputContainer = styled.form`
  width: 80%;
`

export const AddContainer = styled.div`
  align-self: center;
  color: var(--lightGrey);
  #add_icon {
    margin: 0.5rem 0;
    font-size: var(--font-size-xl);
    path{
      stroke: var(--lightGrey);
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    transition: 0.2s ease-in-out;
    a {
      color: var(--blue);
      
    }
    #add_icon {
      path{
        stroke: var(--blue);
      }
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

export const QueryResult = styled.p<IProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  padding-left: 10%;
  font-size: var(--font-size-l);
  font-family: var(--main-font);
  color: var(--grey);
`
