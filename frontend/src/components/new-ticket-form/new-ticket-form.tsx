import { TextField, TextArea, Button, SelectField } from "~/components/index";
import { useNewTicketForm, useRouting } from "~/hooks";
import { getDropdownOptions } from "~/utils";


export function NewTicketForm() {
	
	const {
		ticketData,
		loading,
		error,
		handleInputChange,
		handleTextAreaChange,
		handleSelectChange,
		handleSubmit
	} = useNewTicketForm();

	const { status, category } = getDropdownOptions();

	const { handleToHome } = useRouting();

  return (
    <form onSubmit={handleSubmit} className="new-ticket-form" noValidate>
				<TextField 
					htmlFor="ticket-title" 
					labelText="Título:" 
					type="text" 
					className="new-ticket-form__title"
					value={ticketData.title}
					onChange={handleInputChange}
				/>

				<TextArea
					className="new-ticket-form__textarea"
					name="ticket-body"
					id="ticket-body"
					placeholder="Descreva seu problema..."
					value={ticketData.body}
					onChange={handleTextAreaChange}
				/>

				{error.error && <span>{error.message}</span>}

				<div className="status-form">
					<SelectField 
						id="status-options" 
						labelText="Status: " 
						name="status-options" 
						options={status} 
						onChange={handleSelectChange}
					/>
				</div>

				<div className="new-ticket-form__category">
					<SelectField
						id="category-options"
						labelText="Categoria: "
						name="category-options"
						options={category}
						onChange={handleSelectChange}
					/>
				</div>

				<Button
					className="new-ticket-form__submit-button"
					type="submit"
					bttnText="Criar"
					loading={loading}
				/>

				<Button
					className="new-ticket-form__cancel-button"
					type="button"
					bttnText="Cancelar"
					loading={loading}
					onClick={() => handleToHome()}
				/>
			</form>
  )
}