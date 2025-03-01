import { TextField } from "~/components";
import { Button } from "~/components/ui/button";
import { useForgotPassword } from "~/hooks";

export function ForgotPassword() {
  const { email, error, loading, handleChange, handleSubmit } =
    useForgotPassword();

  return (
    <>
      <section className="password-recovery-section">
        <form
          onSubmit={handleSubmit}
          className="password-recovery__form"
          noValidate
        >
          <h2 className="password-recovery__title">Recupere sua conta</h2>
          <TextField
            labelAria="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            autoComplete="email"
            placeholder="E-mail"
            onChange={handleChange}
            minLength={1}
            required
          />

          <Button
            className="send__button ghost"
            type="submit"
            disabled={error?.error}
          >
            Enviar
          </Button>
        </form>
      </section>
    </>
  );
}
