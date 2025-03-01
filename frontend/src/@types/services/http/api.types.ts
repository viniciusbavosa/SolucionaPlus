type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IRequestParams<M extends HttpMethod> extends RequestInit {
	readonly method: M;
};

export interface apiResponse {
	statusCode: number;
	error: boolean;
	message: string;
	code: string;
};