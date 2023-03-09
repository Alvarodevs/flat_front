import { type IProduct } from '../../interfaces/IProduct'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const ProductCard: React.FC<IProduct> = (props: IProduct): JSX.Element => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.name} />
        {props.isFavourite ? <AiFillHeart/> : <AiOutlineHeart/>}
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <p>{props.price / 100} €</p>
      </div>
    </div>
  )
}

export default ProductCard