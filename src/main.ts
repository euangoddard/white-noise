function domready(): Promise<any> {
  const readyPromise = new Promise<any>((resolve, reject) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
  return readyPromise;
}


class App {
  constructor() {
    
  }

  bootstrap(): void {
    console.log('bootstrapped');
  }
}


domready().then(() => {
  const app = new App();
  app.bootstrap();
})