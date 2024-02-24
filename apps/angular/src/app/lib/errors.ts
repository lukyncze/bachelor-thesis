// Definice vlastních chyb.
export class NoResponseError extends Error {
  constructor(message = 'No response from the server') {
    super(message);
    this.name = 'NoResponseError';
  }
}
