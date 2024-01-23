import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(url)
  }

  post(url: string, object: any): Observable<any> {
    return this.httpClient.post(url, object);
  }
}
