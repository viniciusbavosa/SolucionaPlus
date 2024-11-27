import type { HTMLAttributes } from "react";

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
	labelText: string;
	htmlFor: string;
	labelclass?: string;
}
