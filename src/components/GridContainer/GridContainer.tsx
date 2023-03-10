import {useState} from 'react'
import ReactPaginate from 'react-paginate';
import { Container, PaginationContainer } from "./GridContainerStyle"
import { type IProduct } from "../../interfaces/IProduct"
import mock_products from '../../db/mock_products.json'
import { ITEMS_PER_PAGE } from "../../utils/constants"
// Components
import {ProductCard} from "../index"

const GridContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePageChange = ({ selected }: { selected: number }): void => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPageData = mock_products.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <>
    <Container>
      {currentPageData.map((item: IProduct, i: number) => {
        return <ProductCard key={i} product={item} />
      })}
      
    </Container>
    <PaginationContainer>
    <ReactPaginate
        pageCount={Math.ceil(mock_products.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        nextLabel=">"
        previousLabel="<"
      />
      </PaginationContainer>
    </>
  )
}

export default GridContainer