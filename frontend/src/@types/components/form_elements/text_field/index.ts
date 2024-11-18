interface Validators {
	require?: boolean;
	autoComplete?: string;
	minlength?: number;
	maxlength?: number;
	pattern?: string;
}

export interface TextFieldProps extends Validators {
	htmlFor: string;
	labelText: string;
	type: string;
	name: string;
	id: string;
	className?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
