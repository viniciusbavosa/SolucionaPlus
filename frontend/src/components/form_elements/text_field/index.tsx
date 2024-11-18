import type { TextFieldProps } from "../../../@types";

export function TextField({
	htmlFor,
	labelText,
	type,
	name,
	id,
	className,
	placeholder,
	require,
	autoComplete,
	minlength,
	maxlength,
	pattern,
	onChange
}: TextFieldProps) {

	return (
		<>
			<label htmlFor={htmlFor} className={className}>
				{labelText}
			</label>
				<input
					type={type}
					name={name}
					className={className}
					id={id}
					placeholder={placeholder}
					required={require}
					autoComplete={autoComplete}
					minLength={minlength}
					maxLength={maxlength}
					pattern={pattern}
					onChange={onChange}

				/>
		</>
	);
}
