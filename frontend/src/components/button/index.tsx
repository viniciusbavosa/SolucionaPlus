import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
	bttnText: string;
	loading?: boolean;
}

export function Button({
	type,
	disabled,
	loading,
	bttnText,
	...rest
}: ButtonProps) {
	return (
		<button type={type} disabled={loading} {...rest}>
			{loading ? "Carregando..." : bttnText}
		</button>
	);
}
