import { Button } from "~/components/ui/button";

import { TextField } from "~/components";
import { useSignup } from "~/hooks/";

export function Signup() {
  const { form, loading, error, handleChange, handleSubmit } = useSignup();

  return (
    <>
      <section className="register-section">
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <h2 className="register__title">Cadastre-se</h2>
          <TextField
            labelAria="Nome"
            id="name"
            className="name__input"
            name="name"
            type="text"
            value={form.name}
            autoComplete="name"
            placeholder="Nome"
            onChange={handleChange}
            minLength={3}
            required
          />
          <TextField
            labelAria="Nome de usuário"
            id="username"
            className="username__input"
            name="username"
            type="text"
            value={form.username}
            placeholder="Nome de usuário"
            onChange={handleChange}
            minLength={3}
            required
          />
          <TextField
            labelAria="Email"
            id="email"
            className="email__input"
            name="email"
            type="email"
            value={form.email}
            autoComplete="email"
            placeholder="E-mail"
            onChange={handleChange}
            minLength={1}
            required
          />
          <TextField
            labelAria="Senha"
            id="password"
            className="password__input"
            name="password"
            type="password"
            value={form.password}
            autoComplete="password"
            placeholder="Senha"
            onChange={handleChange}
            minLength={8}
            required
          />
          <TextField
            labelAria="Confirme sua senha"
            id="confirmPassword"
            className="password__input"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            autoComplete="password"
            placeholder="Confirme sua senha"
            onChange={handleChange}
            minLength={1}
          />
          <Button
            type="submit"
            className="send__button ghost"
            disabled={error.error}
          ></Button>
        </form>
      </section>
    </>
  );
}
