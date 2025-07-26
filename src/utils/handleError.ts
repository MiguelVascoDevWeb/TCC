type AppError = {
  code?: string
  message: string
}

export function handleError(error: unknown): string {
  if (typeof error === 'string') return error;

  if (error instanceof Error) return error.message;

  if (typeof error === 'object' && error !== null && 'message' in error) {
    const e = error as AppError;
    return e.message;
  }

  return 'Erro inesperado. Tente novamente.';
}
