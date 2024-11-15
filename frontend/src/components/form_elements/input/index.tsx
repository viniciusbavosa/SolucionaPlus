import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
	type: string;
	name: string;
	id: string;
	className?: string;
	require?: boolean;
	placeholder?: string;
}

export function Input({
	type,
	name,
	id,
	className,
	require,
	placeholder,
}: InputProps) {
	return (
		<input
			type={type}
			name={name}
			className={className}
			id={id}
			placeholder={placeholder}
			required={require}
		/>
	);
}
