import { ApplicationError } from "./application-error";

export class RecordNotFoundException extends ApplicationError {
  constructor(message: string) {
    super(message);
  }
}
