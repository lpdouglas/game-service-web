export type ActionResult<T = undefined> = {
  success: boolean;
  unauthorized: boolean;
  statusCode: number;
  message: string;
  data?: T;
};

export function successResult<T>(data?: T): ActionResult<T> {
  return {
    success: true,
    unauthorized: false,
    statusCode: 200,
    message: "",
    data,
  };
}

export function unauthorizedResult(
  message = "Your session expired. Please log in again."
): ActionResult {
  return {
    success: false,
    unauthorized: true,
    statusCode: 401,
    message,
  };
}

export function errorResult(
  message = "Something went wrong.",
  statusCode = 500
): ActionResult {
  return {
    success: false,
    unauthorized: false,
    statusCode,
    message,
  };
}