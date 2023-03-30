import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dictionary } from 'src/shared/models/dictionary';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

@Injectable()
export class DictionaryService {
  search: {} = {};

  listSubject = new BehaviorSubject<{}>(this.search);
  listValue$ = this.listSubject.pipe(
    switchMap((search) => this.getList(search))
  );

  constructor(private http: HttpClient) {}

  getList(search: any): Observable<Dictionary> {
    return this.http.get<Dictionary>('http://localhost:5000/list');
  }
}
