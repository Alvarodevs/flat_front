import { type IProduct } from '../../interfaces/IProduct'
import { Card, ImgContainer, FavIcon, Name, Description, InfoContainer, Price } from './ProductCardStyle'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

interface IItem {
  product: IProduct
}

const ProductCard: React.FC<IItem> = ({product} :IItem ): JSX.Element => {
  return (
    <Card>
      <ImgContainer>
        <img src={product.image} alt={product.name} />
        <FavIcon>{product.isFavourite ? <AiFillHeart/> : <AiOutlineHeart/>}</FavIcon>
        
      </ImgContainer>
      <InfoContainer>
        <Name>{product.name}</Name>
        <Description>{product.description}</Description>
        
      </InfoContainer>
      <Price>{product.price / 100}€</Price>
    </Card>
  )
}

export default ProductCard