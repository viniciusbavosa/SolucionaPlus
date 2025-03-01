import { TextField, TextArea, SelectField } from "~/components";
import { Button } from "~/components/ui/button";

import { useNewTicket, useRouting } from "~/hooks";
import { getDropdownOptions } from "~/utils";

export function NewTicket() {
  const {
    ticketData,
    loading,
    error,
    handleInputChange,
    handleTextAreaChange,
    handleSelectChange,
    handleSubmit,
  } = useNewTicket();

  const { statusOptions, categoryOptions } = getDropdownOptions();

  const { handleToHome } = useRouting();
  return (
    <section className="new-ticket__section">
      <form onSubmit={handleSubmit} className="new-ticket__form">
        <header className="new-ticket__header">
          <h2 className="new-ticket__title">Crie seu ticket</h2>
          <p className="new-ticket__description">
            Forneça detalhes sobre o seu problema. Não economize.
          </p>
        </header>
        <div className="ticket-title__wrapper">
          <TextField
            labelText="Título"
            labelClass="new-ticket__label"
            type="text"
            placeholder="Sobre o que você quer ajuda?"
            className="new-ticket__input"
            value={ticketData.title}
            required
            onChange={handleInputChange}
          />
        </div>
        <TextArea
          aria-label="Descrição do ticket"
          className="new-ticket__textarea"
          name="ticket-body"
          id="ticket-body"
          placeholder="Descreva seu problema..."
          value={ticketData.body}
          required
          onChange={handleTextAreaChange}
        />
        {error.error && <span>{error.message}</span>}
        <div className="new-ticket-status__wrapper">
          <SelectField
            id="status-options"
            labelText="Status: "
            labelclass="new-ticket__label"
            name="status-options"
            className="new-ticket__status"
            options={statusOptions}
            onChange={handleSelectChange}
          />
        </div>
        <div className="new-ticket-category__wrapper">
          <SelectField
            id="category-options"
            labelText="Categoria: "
            labelclass="new-ticket__label"
            name="category-options"
            className="new-ticket__category"
            options={categoryOptions}
            onChange={handleSelectChange}
          />
        </div>
        <Button className="send__button " type="submit">
          Criar
        </Button>
        <Button
          className="cancel__button"
          type="button"
          onClick={() => handleToHome()}
        >
          Cancelar
        </Button>
      </form>
    </section>
  );
}
