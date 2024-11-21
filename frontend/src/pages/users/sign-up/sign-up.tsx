import { Button } from "~/components";
import { TextField } from "~/components";
import { useSignup } from "~/hooks/";

export function Signup() {

 const {
  form,
  loading,
  error,
  handleChange,
  handleSubmit
 } = useSignup();
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField 
          htmlFor="name"
          id="name"
          labelText="Nome"
          name="name"
          type="text"
          value={form.name}
          autoComplete="name"
          required
          minLength={2}
          placeholder="Nome"
          onChange={handleChange}

        />

        <TextField 
          htmlFor="email"
          id="email"
          labelText="Email"
          name="email"
          type="email"
          value={form.email}
          autoComplete="email"
          required
          maxLength={50}
          placeholder="email"
          onChange={handleChange}
        
        />

        <TextField 
          htmlFor="password"
          id="password"
          labelText="Senha"
          name="password"
          type="password"
          value={form.password}
          autoComplete="password"
          required
          minLength={8}
          placeholder="Senha"
          onChange={handleChange}
        
        />

        <TextField 
          htmlFor="confirmPassword"
          id="confirmPassword"
          labelText="Senha"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          autoComplete="password"
          required
          minLength={8}
          placeholder="Confirme sua senha"
          onChange={handleChange}
        
        />

        <Button bttnText="Enviar" type="submit" loading={loading} disabled={error.error} />
      </form>

    </>
  )
}