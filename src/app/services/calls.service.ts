import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallsService {
 constructor(private httpClient: HttpClient) {

   }

    getData(): Observable<any>{
     return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    
    }
  
    deleteItem(id: number): Observable<any>{
      return this.httpClient.delete( 'https://jsonplaceholder.typicode.com/posts' + id);
    }
  }


