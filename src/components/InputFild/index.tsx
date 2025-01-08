import { InputContainer } from './styles'
import { Input, Icon } from '../../styles'

type InputProps = {
  value?: string
  telefone?: number
  email?: string
  onChange: (value: string) => void
  disabled?: boolean
  src: string
  type: string
  placeholder: string
}

const InputFild = ({
  value,
  onChange,
  disabled = true,
  src,
  type,
  placeholder
}: InputProps) => {
  return (
    <InputContainer>
      <Icon src={src} />
      <Input
        disabled={!disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default InputFild
