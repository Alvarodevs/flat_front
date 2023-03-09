import { Div } from './HomeStyle'
// Components
import { SearchBar, GridContainer } from '../../components'

const Home: React.FC = (): JSX.Element => {
  return (
    <Div>
      <SearchBar />
      <GridContainer/>
    </Div>
  )
}

export default Home
