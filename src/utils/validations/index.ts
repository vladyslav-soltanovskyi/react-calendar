export const validationMethodsWithoutParams = {
  isRequired(value: string) {
    return !value.trim() ? { status: false, errorMessage: "Required field!" } : { status: true };
  },
  isNumber(value: string) {
    let regex = /^\d+$/;
    return !(regex.test(value)) ? { status: false, errorMessage: "The field must contains number" } : { status: true };
  },
  isNumberWithColon(value: string) {
    let regex = /^[0-9:]+$/gi;
    return !(regex.test(value)) ? { status: false, errorMessage: "The field must contains number with colon" } : { status: true };
  },
  isEmail(value: string) {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/;
    return !(regex.test(value)) ? { status: false, errorMessage: "Not valid email" } : { status: true };
  },
}

export const validationMethodsWithParams = {
  minLength(value: string, minLength: number) {
    return (value.length < minLength) ? { status: false, errorMessage: `The field must contains at least ${minLength} characters` } : { status: true };
  },
  maxLength(value: string, maxLength: number) {
    return (value.length > maxLength) ? { status: false, errorMessage: `The field must contains no more than ${maxLength} characters` } : { status: true };
  },
  min(value: string, min: number) {
    return (+value < min) ? { status: false, errorMessage: `The number cannot be less than ${min}` } : { status: true };
  },
  max(value: string, max: number) {
    return (+value > max) ? { status: false, errorMessage: `The number cannot be more than ${max}` } : { status: true };
  },
}

export const validationMethodsWithDates = {
  isDateInFeature(date1: Date, date2: Date) {
    return (date2.getTime() - date1.getTime()) > 0 ? { status: false, errorMessage: "the end date must be later than the start date" } : { status: true };
  },
}

export const validationMethods = {
  ...validationMethodsWithoutParams,
  ...validationMethodsWithParams,
  ...validationMethodsWithDates
}