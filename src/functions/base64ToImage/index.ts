export function base64ToImage(base64String: string): string {
  const base64Flag = `data:image/jpg;base64,`;
  return base64Flag + base64String;
}