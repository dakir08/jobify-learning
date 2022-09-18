import { ChangeEvent, FunctionComponent, HTMLInputTypeAttribute } from "react";

export interface FormRowProps {
  type: HTMLInputTypeAttribute;
  value: string;
  labelText?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const FormRow: FunctionComponent<FormRowProps> = ({
  type,
  name,
  value,
  handleChange,
  labelText,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText ?? name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
