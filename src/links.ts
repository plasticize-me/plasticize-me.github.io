export const landingUrl: string = import.meta.env.VITE_PLASTICIZE_LANDING_URL ?? 'https://plasticize.ir/';
export const appUrl: string = import.meta.env.VITE_PLASTICIZE_APP_URL ?? 'https://app.plasticize.ir/';

export function startHref(): string {
  const url = new URL('start', appUrl.endsWith('/') ? appUrl : `${appUrl}/`);
  url.searchParams.set('src', 'old_site');
  return url.toString();
}
