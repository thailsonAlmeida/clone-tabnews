export class InternalServerError extends Error {
  constructor({ cause, statusCodde }) {
    super("Um erro interno inesperado aconteceu.", {
      cause: cause,
    });
    this.name = "InternalServerError";
    this.action = "Entre em contato com suporte";
    this.statusCodde = statusCodde || 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCodde,
    };
  }
}

export class ServiceError extends Error {
  constructor({ cause, message }) {
    super(message || "Serviço indisponível no momento", {
      cause: cause,
    });
    this.name = "InternalServerError";
    this.action = "Verifique se o serviço está disponível";
    this.statusCodde = 503;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCodde,
    };
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super("Método não permitio para este endpoint");
    this.name = "MethodNotAllowedError";
    this.action =
      "Verifique se o método HTTP enviado é valido para este endpoint";
    this.statusCodde = 405;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCodde,
    };
  }
}
