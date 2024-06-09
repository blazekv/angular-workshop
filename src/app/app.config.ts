import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { API_URL } from './di/token';
import { environment } from '../environments/environment';
import { LoggingService } from './services/logging/logging.service';
import { ConsoleLoggingService } from './services/logging/console-logging.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([loggingInterceptor, tokenInterceptor])),
    {
      provide: API_URL,
      useValue: environment.apiUrl,
    },
    {
      provide: LoggingService,
      useClass: ConsoleLoggingService,
    },
  ],
};
