export interface SuccessResponse {
  message: string
}

export function newSuccessResponse(init: any): SuccessResponse {
  return {
    message: init.message,
  }
}