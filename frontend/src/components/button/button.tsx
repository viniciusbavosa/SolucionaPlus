import type { ButtonProps } from "~/@types";

export function Button({
	type,
	disabled,
	loading,
	bttnText,
	...rest
}: ButtonProps) {
	return (
		<button 
			type={type} 
			disabled={loading} 
			{...rest}
		>
			{loading ? "Carregando..." : bttnText}
		</button>
	);
}
