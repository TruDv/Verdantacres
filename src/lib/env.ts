export const env = {
  RESEND_API_KEY: (import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY) as string,
};