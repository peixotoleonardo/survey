export class MissingParamError<T> extends Error {
  constructor(paramName: keyof T) {
    super(`missing param: ${paramName.toString()}`);

    this.name = this.constructor.name;
  }
}
