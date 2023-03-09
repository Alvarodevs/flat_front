import { Container } from "./GridContainerStyle"
import { type IProduct } from "../../interfaces/IProduct"
import mock_products from '../../db/mock_products.json'
// Components
import {ProductCard} from "../index"

const GridContainer: React.FC = () => {
  return (
    <Container>
      {mock_products.map((item: IProduct, i: number) => {
        return <ProductCard key={i} name={item.name} description={item.description} image={item.image} isFavourite={item.isFavourite} price={item.price} section={item.section} />
      })}

    </Container>
  )
}

export default GridContainer