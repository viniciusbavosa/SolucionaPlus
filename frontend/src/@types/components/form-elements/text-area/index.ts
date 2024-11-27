import type { HTMLAttributes } from "react";

export interface ITextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
	name: string;
	maxlength?: number;
	minlength?: number;
	placeholder: string;
	required?: boolean;
	value: string;
}
