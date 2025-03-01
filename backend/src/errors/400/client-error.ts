export const clientError = {
	statusCode: 400,
	error: true,
	message: "",
	code: "VALIDATION_ERROR",
	setMessage(error: string) {
		this.message = error;
		return clientError;
	},
	setStatusCode(status: number) {
		this.statusCode = status;
		return clientError;
	},
	setCode(code: string) {
		this.code = code;
		return clientError;
	}
};