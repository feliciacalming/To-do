export function log(msg: string): void {
  if (import.meta.env.VITE_DEBUGGING === 'true') {
    console.log(msg);
  }
}
