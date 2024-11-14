import { ComponentProps } from "react"

interface TextInputProps extends ComponentProps<'input'> {
  type: string;
  name: string;
  className?: string;
  id: string;
  placeholder?: string;
  require?: boolean;
};


export function TextInput({ type, name, className, id, placeholder, require  }: TextInputProps) {

  return (
    <input 
      type={type} 
      name={name} 
      className={className} 
      id={id}
      placeholder={placeholder}
      required={require}
      />
  )
};