import type { TextFieldProps } from "~/@types";
import { Label } from "~/components";

export function TextField({
  htmlFor,
  labelText,
  labelClass,
  labelAria,
  onChange,
  ...rest
}: TextFieldProps) {
  return (
    <>
      <Label
        htmlFor={htmlFor ? htmlFor : ""}
        labelText={labelText ? labelText : ""}
        aria-label={labelAria}
        className={labelClass}
      />
      <input onChange={onChange} {...rest} />
    </>
  );
}
