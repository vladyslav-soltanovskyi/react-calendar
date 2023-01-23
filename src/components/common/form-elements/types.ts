import { InputHTMLAttributes } from "react";

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string | undefined;
  isShowError?: boolean;
  fullWidth?: boolean;
}