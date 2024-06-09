import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class LoggingService {
  abstract log(message: string, ...params: unknown[]): void;
}
