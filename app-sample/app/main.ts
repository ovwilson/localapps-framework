
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
if (process.env.ENV === 'PRODUCTION') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
