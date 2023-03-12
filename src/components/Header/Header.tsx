import { Container, Logo, IconsContainer, Title } from "./HeaderStyle"
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
      <Title>
        Products test
      </Title>
      <IconsContainer>
        <AiOutlineUser/>
        <RxMagnifyingGlass/>
      </IconsContainer>
    </Container>
  )
}

export default Header