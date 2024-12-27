import ListaDeContato from '../../containers/ListaDeContatos'
import PhoneLayout from '../../containers/PhoneLayout'

const Home = () => (
  <>
    <PhoneLayout showBarraSuperior={true}>
      <ListaDeContato />
    </PhoneLayout>
  </>
)

export default Home
