export function image(path: string) {
  return import.meta.env.VITE_BASE_URL + `images/${path}`;
}
