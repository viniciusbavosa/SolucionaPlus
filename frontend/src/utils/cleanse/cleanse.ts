import { ZodTypeAny } from "zod";
import { cleanseProps, IDataObj } from "~/@types";

export function cleanse({ schema, data, behavior }: cleanseProps<ZodTypeAny>) {

  switch (behavior) {
    case "validate":
      return schema?.safeParse(data);
    case "sanitize":
      return sanitize(data);
    case "both":
      const isValid = schema?.safeParse(data);

      return isValid?.success && sanitize(data);
    default:
      console.log("Preencha o objeto");
  };
}


function sanitize(data: IDataObj | string): string {
  return JSON.stringify(data)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&#39;")
          .replace(/\//g, "&#x2F;")
          .trim();
}