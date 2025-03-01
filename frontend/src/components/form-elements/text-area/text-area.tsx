import type { ITextAreaProps } from "~/@types";

export function TextArea({
	name,
	maxlength,
	minlength,
	required,
	value,
	...rest
}: ITextAreaProps) {
	return (
		<>
			<textarea
				name={name}
				value={value}
				required={required}
				{...rest}
			/>
		</>
	);
}
