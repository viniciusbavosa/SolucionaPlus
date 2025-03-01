export const success = {
	statusCode: 200,
	error: false,
	message: "",
	code: "SUCCESS_CODE",
	setMessage(error: string) {
		this.message = error;
		return success;
	},
	setStatusCode(status: number) {
		this.statusCode = status;
		return success;
	},
	setCode(code: string) {
		this.code = 'code';
		return success;
	}
};
