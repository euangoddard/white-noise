import { Subject, Observable } from 'rxjs';


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

  private isPlaying = false;

  private state$ = new Subject();

  constructor() {
  }

  bootstrap(): void {
    console.log('bootstrapped');
    this.bindEvent();
    this.state$.subscribe(() => {
      console.log(this.isPlaying);
    });
  }

  private bindEvent(): void {
    const control = document.querySelector('.control-noise');
    const click$ = Observable.fromEvent(control, 'click');
    click$.subscribe(this.controlNoise.bind(this));
  }

  private controlNoise(): void {
    this.isPlaying = !this.isPlaying;
    this.state$.next();
  }
}


domready().then(() => {
  const app = new App();
  app.bootstrap();
});
