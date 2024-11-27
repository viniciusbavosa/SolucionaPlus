import type { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<"button"> {
	bttnText: string;
	type: "button" | "submit" | "reset" | undefined;
	loading?: boolean;
	disabled?: boolean;
}
