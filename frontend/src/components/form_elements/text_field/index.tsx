import { Input } from "../input";
import { Label } from "../label";

interface TextFieldProps {
	htmlFor: string;
	labelText: string;
	type: string;
	name: string;
	id: string;
	className?: string;
	require?: boolean;
	placeholder?: string;
	value?: string;
}

export function TextField({
	htmlFor,
	labelText,
	type,
	name,
	id,
	className,
	require,
	placeholder,
}: TextFieldProps) {
	return (
		<>
			<Label htmlFor={htmlFor} labelText={labelText} />
			<Input
				type={type}
				className={className}
				id={id}
				name={name}
				placeholder={placeholder}
				require={require}
			/>
		</>
	);
}
