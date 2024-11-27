import type { IRequestParams } from "~/@types/services/http";

export class Api {
	private static baseUrl = import.meta.env.VITE_BASE_URL;

	private constructor() {}

	public static async get(endpoint: string, options: IRequestParams<"GET">) {
		const url = Api.baseUrl.concat(endpoint);

		try {
			const response = await fetch(url, options);

			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	public static async post(endpoint: string, options: IRequestParams<"POST">) {
		const url = Api.baseUrl.concat(endpoint);

		try {
			const response = await fetch(url, options);

			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	public static async put(endpoint: string, options: IRequestParams<"PUT">) {
		const url = Api.baseUrl.concat(endpoint);

		try {
			const response = await fetch(url, options);

			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	public static async patch(
		endpoint: string,
		options: IRequestParams<"PATCH">,
	) {
		const url = Api.baseUrl.concat(endpoint);

		try {
			const response = await fetch(url, options);

			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}

	public static async delete(
		endpoint: string,
		options: IRequestParams<"DELETE">,
	) {
		const url = Api.baseUrl.concat(endpoint);

		try {
			const response = await fetch(url, options);

			const data = await response.json();
			return data;
		} catch (err) {
			console.log(err);
		}
	}
}
