import type { HTMLAttributes } from "react";
import type { IOptions } from "~/@types";

export interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  labelText: string;
  labelclass?: string;
  options: IOptions[];
  name: string;
  id: string;
}
