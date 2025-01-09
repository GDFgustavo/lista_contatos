import { InputContainer } from './styles'
import { Input, Icon } from '../../styles'

type InputProps = {
  value?: string
  onChange: (value: string) => void
  disabled?: boolean
  src: string
  type: string | 'tell'
  placeholder: string
  maxLength?: number
}

const InputFild = ({
  value,
  onChange,
  disabled = true,
  src,
  type,
  placeholder,
  maxLength
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let novoValor = e.target.value

    if (type === 'tell') {
      novoValor = novoValor.replace(/\D/g, '')
    }
    onChange(novoValor)
  }

  return (
    <InputContainer>
      <Icon src={src} />
      <Input
        disabled={!disabled}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default InputFild
