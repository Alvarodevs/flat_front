import { Container, Logo, IconsContainer } from "./HeaderStyle"
import logo from "../../assets/images/flat101.png"
import {Link} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {RxMagnifyingGlass} from 'react-icons/rx'

// type Props = {}

const Header: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt="logo"/>
      </Link>
      <IconsContainer>
        <AiOutlineUser/>
        <RxMagnifyingGlass/>
      </IconsContainer>
    </Container>
  )
}

export default Header