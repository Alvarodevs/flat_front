import { Container, Logo, IconsContainer } from "./HeaderStyle"
import logo from "../../assets/images/flat101.png"
import {AiOutlineUser} from 'react-icons/ai'
import {RxMagnifyingGlass} from 'react-icons/rx'

// type Props = {}

const Header = (): JSX.Element => {
  return (
    <Container>
      <Logo src={logo} alt="logo"/>
      <IconsContainer>
        <AiOutlineUser/>
        <RxMagnifyingGlass/>
      </IconsContainer>
    </Container>
  )
}

export default Header