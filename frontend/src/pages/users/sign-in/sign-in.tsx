import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import { TextField } from "~/components";
import { useSignin } from "~/hooks/";

export function SignIn() {
  const {
    username,
    email,
    password,
    credentialType,
    loading,
    error,
    toggleCredentialType,
    handleSubmit,
    handleChange,
  } = useSignin();

  return (
    <>
      <section className="login-section">
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <h2 className="login__title">Entre com</h2>
          {credentialType === "username" ? (
            <TextField
              labelAria="Nome de usuário"
              className="username__input"
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Nome de usuário"
              onChange={handleChange}
              minLength={3}
              required
            />
          ) : (
            <TextField
              labelAria="Email"
              className="email__input"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="E-mail"
              autoComplete="email"
              onChange={handleChange}
              minLength={1}
              required
            />
          )}

          <TextField
            labelAria="Senha"
            className="password__input"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Senha"
            autoComplete="current-password"
            onChange={handleChange}
            minLength={8}
            required
          />

          <Link className="forgot-password__link" to={"/forgotPassword"}>
            Esqueceu a senha?
          </Link>
          <Button
            type="submit"
            className="send__button ghost"
            disabled={error.error}
          >
            Enviar
          </Button>
          <Button
            type="button"
            className="toggle-login_button ghost"
            onClick={toggleCredentialType}
          >
            {credentialType === "username"
              ? "Logar com e-mail"
              : "Logar com usuário"}
          </Button>
        </form>
      </section>
    </>
  );
}
