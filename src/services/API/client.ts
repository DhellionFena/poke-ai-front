export const httpClient = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const response = await fetch(`${baseUrl}${url}`, options);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erro na API de pokemon");
  }
  return response.json() as Promise<T>;
};
