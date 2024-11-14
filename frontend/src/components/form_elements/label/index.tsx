import { ComponentPropsWithoutRef } from "react";

interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  htmlFor: string;
  labelText: string;
  className?: string;
}

export function Label({labelText, htmlFor, className}: LabelProps) {
  return (
    <label 
      htmlFor={htmlFor} 
      className={className}
      >
        {labelText}
      </label>
  );
}