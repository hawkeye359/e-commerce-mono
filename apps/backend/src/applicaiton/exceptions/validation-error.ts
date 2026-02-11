import { ApplicationError } from "./application-error";

interface ValidatioErrorSchema {
  message: string;
  path: string;
}

export class ValidationError extends ApplicationError {
  errors: ValidatioErrorSchema[];
  constructor(message: string, errors: ValidatioErrorSchema[]) {
    super(message);
    this.errors = errors;
  }
}
