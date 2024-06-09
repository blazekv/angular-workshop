import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class NullLoggingService implements LoggingService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  log(message: string): void {
    // Do nothing
  }
}
