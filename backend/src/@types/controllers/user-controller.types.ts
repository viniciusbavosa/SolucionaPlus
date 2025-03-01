export interface IRegisterRequestBody {
	name: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
}

interface BaseProperty {
	credentialType: "email" | "username";
	password: string;
}

interface LoginWithUsername extends BaseProperty {
	credentialType: "username";
	username: string;
	email?: never;
}

interface LoginWithEmail extends BaseProperty {
	credentialType: "email";
	email: string;
	username?: never;
}

export type ILoginRequestBody = LoginWithUsername | LoginWithEmail;

export interface IRecoveryAccountBody {
	email: string;
}
