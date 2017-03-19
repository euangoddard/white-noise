import { domready } from './domready';
import { App } from './app';


domready().then(() => {
  const app = new App();
  app.bootstrap();
});
