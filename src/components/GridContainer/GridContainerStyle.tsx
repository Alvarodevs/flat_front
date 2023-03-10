import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 1rem 1.5rem;
`

export const PaginationContainer = styled.div`
padding: 0 0.2rem;
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    font-family: var(--main-font);
    padding: 0 0.5rem;
    margin: 1rem 0;
  }
  .page-item{
    margin: 0.2rem;
    background-color: var(--blue);
    border-radius: 10px;
    padding:0.2rem 0.5rem;
    color: var(--white);
    font-weight: 600;
  }
  .active{
    background-color: var(--lightBlue);
    color: var(--black);
  }
  .page-link{
    :hover{
      color: var(--black);
      cursor: pointer;
    }
    
  }
`
