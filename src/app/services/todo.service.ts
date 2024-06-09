import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Todo } from '../model/Todo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private httpClient = inject(HttpClient);

  public getBooks() {
    return this.httpClient
      .get<{ data: Todo[] }>(`${environment.apiUrl}/tables/knihy/data`)
      .pipe(map((response) => response.data));
  }
}
