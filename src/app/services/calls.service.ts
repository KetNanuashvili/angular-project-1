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
     return this.httpClient.get('https://us-central1-js04-b4877.cloudfunctions.net/tasks');
    
    }
  
   
  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete(`https://us-central1-js04-b4877.cloudfunctions.net/tasks/${id}`);
  }

  activateItem(item): Observable<any> {
    const url = `https://us-central1-js04-b4877.cloudfunctions.net/tasks/check/${item.id}`;
    return this.httpClient.post(url, {});
  }
  
  deactivateItem(item): Observable<any> {
    const url = `https://us-central1-js04-b4877.cloudfunctions.net/tasks/uncheck/${item.id}`;
    return this.httpClient.post(url, {});
  }
  createItem(data): Observable<any> {
    const url = `https://us-central1-js04-b4877.cloudfunctions.net/tasks/create/`;
    return this.httpClient.post(url, data);
  }
  }


