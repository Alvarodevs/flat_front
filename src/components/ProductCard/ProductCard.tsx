import type IProduct from '../../interfaces/IProduct'
// Redux
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from '../../features/products/productsSlice';

import { Card, ImgContainer, FavIcon, Name, Description, InfoContainer, Price } from './ProductCardStyle'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

interface IItem {
  product: IProduct
}

const ProductCard: React.FC<IItem> = ({product} :IItem ): JSX.Element => {
  const products = useAppSelector(selectProducts)
  const lengthProducts = products.length
  
  return (
    <Card length={lengthProducts}>
      <ImgContainer >
        <img src={product.image} alt={product.name} />
        <FavIcon>{product.isFavourite ? <AiFillHeart/> : <AiOutlineHeart/>}</FavIcon>
        
      </ImgContainer>
      <InfoContainer>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        
      </InfoContainer>
      <Price>{product.price}€</Price>
    </Card>
  )
}

export default ProductCard