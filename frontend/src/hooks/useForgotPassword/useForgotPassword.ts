import { useState } from "react";
import type { IError } from "~/@types";
import type { apiResponse, IRequestParams } from "~/@types";
import { Api } from "~/services";
import { forgotPasswordSchema } from "~/validators";

export function useForgotPassword() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.currentTarget.value);

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const validData = forgotPasswordSchema.safeParse(email);

      if (!validData.success) throw new Error("Verifique seus dados");

      /* 
				Builds and sends Email recovery request
			*/
      const params: IRequestParams<"POST"> = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      };

      const response: apiResponse = await Api.post("/users/token", params);

      if (response.error) throw new Error("Erro ao enviar dados");

      setEmail("");
    } catch (err) {
      console.log(err);
      setError({
        error: true,
        message: err as string,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
}
