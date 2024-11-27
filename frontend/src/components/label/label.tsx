import type { ILabelProps } from "~/@types/components/label";

export function Label({ labelText, htmlFor, ...rest }: ILabelProps) {
	return (
		<label htmlFor={htmlFor} {...rest}>
			{labelText}
		</label>
	);
}
