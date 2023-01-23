import { FormEvent } from "react";

export type TSubmitHandler<FormValues> = (values: FormValues, e: FormEvent<HTMLFormElement>) => Promise<void> | void;