import { type IProduct } from '../../interfaces/IProduct'
import { Card, ImgContainer, FavIcon, Name, Description, InfoContainer, Price } from './ProductCardStyle'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const ProductCard: React.FC<IProduct> = ({name, description, image, isFavourite, price, section} :IProduct ): JSX.Element => {
  return (
    <Card>
      <ImgContainer>
        <img src={image} alt={name} />
        <FavIcon>{isFavourite ? <AiFillHeart/> : <AiOutlineHeart/>}</FavIcon>
        
      </ImgContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        
      </InfoContainer>
      <Price>{price / 100} €</Price>
    </Card>
  )
}

export default ProductCard