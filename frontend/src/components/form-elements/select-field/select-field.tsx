import type { ISelectProps } from "~/@types";
import { Label } from "~/components/label/label";

export function SelectField({ 
	name, 
	id,  
	labelText, 
	labelclass,
	options, 
	...rest 
}: ISelectProps) {

	return (
		<>
			<Label
				htmlFor={id}
				labelText={labelText}
				labelclass={labelclass}
			/>

			<select 
				name={name} 
				id={id} 
				{...rest}
			>
				{options.map(
					({ value, text, disabled }) => (
						<option  key={value} value={value} disabled={disabled}>{text}</option>
					)
				)}
			</select>
		</>
	);
}
