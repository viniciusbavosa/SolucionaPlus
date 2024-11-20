export function sanitize(data: string) {
  const sanitizeInput = data
    .replace(/[<>]/g, '')
    .trim();

    return JSON.stringify(sanitizeInput);
};