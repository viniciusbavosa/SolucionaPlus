import { useState } from "react";
import { TextField } from "../../../components/form_elements";
import { Button } from "../../../components/button";

export function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // Manages the state and updates of input fields.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      switch (event.currentTarget.id) {
        case "name":
          setName(event.currentTarget.value);
          break;
        case "email":
          setEmail(event.currentTarget.value);
          break;
        case "password":
          setPassword(event.currentTarget.value);
          break;
        default:
         throw new Error();
      };  
    } catch (error) {
      console.log(error)
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
  };

	return (
		<>
			<form onSubmit={handleSubmit}>
				<TextField
          htmlFor="name"
					labelText="Nome"
					type="text"
					id="name"
					name="name"
          placeholder="Nome"
					autoComplete="name"
          require={true}
          minlength={3}
          onChange={handleChange}
				/>

				<TextField
          htmlFor="email"
					labelText="Email"
					type="email"
					id="email"
					name="email"
          placeholder="E-mail"
					autoComplete="email"
          require={true}
          minlength={1}
          onChange={handleChange}

				/>

				<TextField
          htmlFor="password"
					labelText="Senha"
					type="password"
					id="password"
					name="password"
          placeholder="Senha"
					autoComplete="current-password"
          require={true}
          minlength={8}
          onChange={handleChange}
				/>

        <Button type="submit" bttnText="Enviar" />
			</form>
		</>
	);
}
