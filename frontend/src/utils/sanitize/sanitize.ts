export function sanitize(data: string) {
  const sanitizeInput = data
    .replace(/</g, '&lt;') 
    .replace(/>/g, '&gt;') 
    .replace(/"/g, '&quot;') 
    .replace(/'/g, '&#39;') 
    .replace(/\//g, '&#x2F;')
    .trim();

    return JSON.stringify(sanitizeInput);
};