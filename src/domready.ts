export function domready(): Promise<any> {
  const readyPromise = new Promise<any>((resolve, reject) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
  return readyPromise;
}
