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

  private store$ = new Subject<AppState>();

  constructor() {
  }

  bootstrap(): void {
    console.log('bootstrapped');
    this.bindEvent();
    this.store$.subscribe(state => {
      console.log(state);
    });
    this.store$.next(initialState);
  }

  private bindEvent(): void {
    const control = document.querySelector('.control-noise');
    const click$ = Observable.fromEvent(control, 'click');
    click$.withLatestFrom(this.store$).subscribe(this.controlNoise.bind(this));
  }

  private controlNoise([event, state]): void {
    const newState: AppState = {...state, isPlaying: !state.isPlaying};
    this.store$.next(newState);
  }
}


domready().then(() => {
  const app = new App();
  app.bootstrap();
});


interface AppState {
  isPlaying: boolean;
}

const initialState: AppState = {
  isPlaying: false,
}