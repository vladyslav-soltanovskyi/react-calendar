import { validationMethodsWithDates, validationMethodsWithoutParams, validationMethodsWithParams } from "utils/validations";

export interface IValidatorData {
  [k: string]: string | number | boolean | Date;
}

export interface IRules {
  [k: string]: IRule;
}

export type IRuleWithParam = {
  [k in TypeRuleWithParameter]?: number;
};

export type IRuleWithoutParam = {
  [k in TypeRuleWithoutParameter]?: boolean;
};

export type IRuleWithDates = {
  [k in TypeRuleWithDates]?: keyof IRules;
};

export type IRule = IRuleWithParam | IRuleWithoutParam | IRuleWithDates;

export interface IDataForCheck<Fields> {
  value: Fields[keyof Fields];
  fieldRules: IRule;
  fields?: Fields;
}

export type TypeRuleMethods = TypeRuleWithoutParameter | TypeRuleWithParameter | TypeRuleWithDates;

export type TypeRuleWithoutParameter = keyof typeof validationMethodsWithoutParams;
export type TypeRuleWithParameter = keyof typeof validationMethodsWithParams;
export type TypeRuleWithDates = keyof typeof validationMethodsWithDates;

export interface IValidationResponse {
  status: boolean;
  errorMessage?: string;
}

export type IErrorsMessages<DefaultFields> = {
  [k in keyof DefaultFields]?: string;
}