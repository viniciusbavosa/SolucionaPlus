import type { TextFieldProps } from "~/@types";
import { Label } from "~/components";

export function TextField({
	htmlFor,
	labelText,
	labelClass,
	onChange,
	...rest
}: TextFieldProps) {
	return (
		<>
			<Label htmlFor={htmlFor} labelText={labelText} className={labelClass} />
			<input onChange={onChange} {...rest} />
		</>
	);
}
