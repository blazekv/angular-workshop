import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { LoggingService } from './services/logging/logging.service';

@Component({
  selector: 'eg-root',
  standalone: true,
  imports: [RouterOutlet, MatButton, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private loggingService = inject(LoggingService);

  title = 'Todo';

  data$ = this.activatedRoute.data;

  ngOnInit(): void {
    this.loggingService.log('Data', this.activatedRoute.snapshot.data);
    this.router.events.subscribe((event) => {
      this.loggingService.log('Event', event);
    });
  }
}
