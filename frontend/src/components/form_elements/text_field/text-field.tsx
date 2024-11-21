import type { TextFieldProps } from "~/@types";

export function TextField({
	htmlFor,
	labelText,
	labelClass,
	onChange,
	...rest
}: TextFieldProps) {
	return (
		<>
			<label 
				htmlFor={htmlFor} 
				className={labelClass}
			>
				{labelText}
			</label>
			<input
				onChange={onChange}
				{...rest}
			/>
		</>
	);
}
