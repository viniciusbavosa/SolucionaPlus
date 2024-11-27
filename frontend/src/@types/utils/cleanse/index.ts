import { ZodType } from "zod";

export interface IDataObj {
  [key: string]: string | number;
}

export interface cleanseProps<T extends ZodType> {
  schema?: T;
  data: IDataObj | string;
  behavior: "validate" | "sanitize" | "both"; 
}