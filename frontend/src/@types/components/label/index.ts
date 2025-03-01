import type { HTMLAttributes, ReactNode } from "react";

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
	labelText: string | ReactNode;
	htmlFor: string;
	labelclass?: string;
}
