// The browser platform without a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module factory produced by the static offline compiler
import { AppModule } from './app.module';

// Launch with the app module factory.
platformBrowserDynamic().bootstrapModule(AppModule);
