type Input =
	| "text"
	| "password"
	| "email"
	| "number"
	| "search"
	| "tel"
	| "url"
	| "checkbox"
	| "radio"
	| "date"
	| "time"
	| "datetime-local"
	| "month"
	| "week"
	| "color"
	| "file"
	| "hidden";

export interface TextFieldProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	htmlFor: string;
	labelText: string;
	labelClass?: string;
	type: Input;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
