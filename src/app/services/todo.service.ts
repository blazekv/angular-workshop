import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/Todo';
import { map } from 'rxjs';
import { API_URL } from '../di/token';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private httpClient = inject(HttpClient);
  private apiUrl = inject(API_URL);

  public getBooks() {
    return this.httpClient
      .get<{ data: Todo[] }>(`${this.apiUrl}/tables/knihy/data`)
      .pipe(map((response) => response.data));
  }
}
