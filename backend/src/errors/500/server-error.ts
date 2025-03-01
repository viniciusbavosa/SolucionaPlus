export const serverError = {
	statusCode: 500,
	error: true,
	message: "",
	code: "INTERNAL_SERVER_ERROR",
	setMessage(error: string) {
		this.message = error;
		return serverError;
	},
	setStatusCode(status: number) {
		this.statusCode = status;
		return serverError;
	},
	setCode(code: string) {
		this.code = 'code';
		return serverError;
	}
};
