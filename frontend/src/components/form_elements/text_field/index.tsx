import { Label } from '../label';
import { TextInput } from '../input';

interface TextFieldProps {
  htmlFor: string;
  labelText: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  require: boolean;
}

export function TextField({ id ,htmlFor, labelText, name, type, placeholder, require}: TextFieldProps) {
  return (
    <>
      <Label htmlFor={htmlFor} labelText={labelText} />
      <TextInput type={type} id={id} name={name} placeholder={placeholder} require={require} />
    </>
  )
};