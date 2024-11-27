import { useState } from "react";
import type { IError, INewTicketFormState } from "~/@types";
import type { IRequestParams } from "~/@types/services/http";
import { Api } from "~/services";
import { cleanse } from "~/utils";
import { ticketDataSchema } from "~/validators";

export function useNewTicketForm() {
	const status = "aberto";
	const category = "webdev";

	const [ticketData, setTicketData] = useState<INewTicketFormState>({
		title: "",
		body: "",
		status,
		category
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<IError>({
		error: false,
		message: "",
	});


	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTicketData({
			title: event.currentTarget.value,
			body: ticketData.body,
			status: ticketData.status,
			category: ticketData.category
		});
	};

	const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTicketData({
			title: ticketData.title,
			body: event.currentTarget.value,
			status: ticketData.status,
			category: ticketData.category
		});
	};

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		switch(event.currentTarget.id){
			case "status-options":
				setTicketData({
					title: ticketData.title,
					body: ticketData.body,
					status: event.currentTarget.value,
					category: ticketData.category
				});
				break;
			case "category-options":
				setTicketData({
					title: ticketData.title,
					body: ticketData.body,
					status: ticketData.status,
					category: event.currentTarget.value
				});
				break;
			default:
				console.log("Algo deu errado no loop switch dentro do hook useNewTicketForm");
		};
	};


	const handleSubmit = async (event: React.FormEvent) => {
		try {
			event.preventDefault();
			setLoading(true);
			const cleanData = cleanse({
				schema: ticketDataSchema,
				data: ticketData as {},
				behavior: "both"
			});
			
			if (!cleanData) throw new Error("Verifique seus dados");

			const params: IRequestParams<"POST"> = {
				method: "POST",
				body: JSON.stringify(cleanData),
				credentials: "include"
			};

			const response = await Api.post("/ticket", params);
			
			if (!response) throw new Error("Failed to send request");
			
			window.location.assign('/');

			setTicketData({
				title: "",
				body: "",
				status,
				category,
			});
		} catch (err) {

			setError({
				error: true,
				message: `${err}`,
			});
		} finally {
			setLoading(false);
		}
	};

	return {
		ticketData,
		loading,
		error,
		handleInputChange,
		handleTextAreaChange,
		handleSelectChange,
		handleSubmit,
	};
}
