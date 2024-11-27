import type { HTMLAttributes } from "react";
import { IOptionElement } from "~/@types";

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
	labelText: string;
	labelclass?: string;
	options: IOptionElement[];
	name: string;
	id: string;
}
