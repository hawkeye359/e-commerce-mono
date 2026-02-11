interface errorType {
  message: string;
  path: string;
}

export class InvalidParamsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidParamsException";
  }
}
