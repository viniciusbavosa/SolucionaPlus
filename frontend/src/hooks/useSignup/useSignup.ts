import { useState } from "react";
import type { IError, ISignupForm } from "~/@types";
import type { apiResponse, IRequestParams } from "~/@types";
import { Api } from "~/services";
import { registerSchema } from "~/validators";

export function useSignup() {
  const [form, setForm] = useState<ISignupForm>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<IError>({
    error: false,
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "name":
        setForm({
          name: event.target.value,
          username: form.username,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        });
        break;
      case "username":
        setForm({
          name: form.name,
          username: event.target.value,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        });
        break;
      case "email":
        setForm({
          name: form.name,
          username: form.username,
          email: event.target.value,
          password: form.password,
          confirmPassword: form.confirmPassword,
        });
        break;
      case "password":
        setForm({
          name: form.name,
          username: form.username,
          email: form.email,
          password: event.target.value,
          confirmPassword: form.confirmPassword,
        });
        break;
      case "confirmPassword":
        setForm({
          name: form.name,
          username: form.username,
          email: form.email,
          password: form.password,
          confirmPassword: event.target.value,
        });
        break;
      default:
        console.log("Erro nos estados");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const validData = registerSchema.safeParse(form);

      if (!validData.success) throw new Error("Erro ao validar dados");

      const params: IRequestParams<"POST"> = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };

      const response: apiResponse = await Api.post("/users", params);

      if (response.error) throw new Error("Erro ao enviar dados");

      console.log(response);

      setForm({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
      setError({
        error: true,
        message: "Erro: " + err,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
}
