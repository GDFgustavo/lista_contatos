import Editando from '../../containers/Editando'
import { Notch } from '../../containers/Phone/styles'
import { PhoneContainer } from '../../styles'
import { TelaContainer } from '../../styles'

const Editar = () => (
  <>
    <PhoneContainer>
      <Notch />
      <TelaContainer>
        <Editando />
      </TelaContainer>
    </PhoneContainer>
  </>
)

export default Editar
