export class ApplicationError extends Error {
  readonly occuredOn: Date;
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, this.constructor.prototype);
    this.occuredOn = new Date();
  }
}
