import { Noise } from './noise';


export class App {

  private state: AppState = AppState.Stopped;

  private noise: Noise;

  constructor() {
    this.noise = new Noise();
  }

  bootstrap(): void {
    this.bindEvents();
    this.enterState(AppState.Stopped);
  }

  private bindEvents(): void {
    const controlStart = document.querySelector('.control.start') as HTMLButtonElement;
    controlStart.addEventListener('click', () => {
      this.updateState(AppState.Starting);
    });

    const controlStop = document.querySelector('.control.stop') as HTMLButtonElement;
    controlStop.addEventListener('click', () => {
      this.updateState(AppState.Stopping);
    });

    const maskLight = document.querySelector('.mask-light') as HTMLElement;
    maskLight.addEventListener('transitionend', () => {
      this.updateState(AppState.Playing);
    });

    const maskDark = document.querySelector('.mask-dark') as HTMLElement;
    maskDark.addEventListener('transitionend', () => {
      this.updateState(AppState.Stopped);
    });
  }

  private updateState(newState: AppState): void {
    this.leaveState(this.state);
    this.enterState(newState);
    this.state = newState;
  }

  private enterState(state: AppState): void {
    document.body.classList.add(CSSClassesByState.get(state));
    setTimeout(() => document.body.classList.add('run'), 10);
    if (state === AppState.Playing) {
      this.noise.start();
    }
  }

  private leaveState(state: AppState): void {
    document.body.classList.remove(CSSClassesByState.get(state));
    document.body.classList.remove('run');
    if (state === AppState.Playing) {
      this.noise.stop();
    }
  }
}


const enum AppState {
  Stopped,
  Starting,
  Playing,
  Stopping,
}

const CSSClassesByState = new Map<AppState, string>([
  [AppState.Stopped, 'stopped'],
  [AppState.Starting, 'starting'],
  [AppState.Playing, 'playing'],
  [AppState.Stopping, 'stopping'],
]);
