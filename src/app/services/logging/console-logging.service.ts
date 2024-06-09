import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggingService extends LoggingService {
  override log(message: string, ...params: unknown[]): void {
    console.log(message, ...params);
  }
}
