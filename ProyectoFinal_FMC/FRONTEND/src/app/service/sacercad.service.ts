// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AcercaD } from '../model/acerca-d';

// @Injectable({
//   providedIn: 'root'
// })
// export class SAcercadService {

//   URL = 'https://backendfmc.herokuapp.com/acerca/';

//   constructor(private httpClient: HttpClient) { }


//   public lista(): Observable <AcercaD[]> {
//     return this.httpClient.get<AcercaD[]>(this.URL + 'lista');
//   }

//   public detail(id: number): Observable<AcercaD>{
//     return this.httpClient.get<AcercaD>(this.URL + `detail/${id}`);
//   } 

//   public save(acercad:AcercaD): Observable<any>{
//     return this.httpClient.post<any>(this.URL + 'create', acercad);
//   }

//   public update(id: number, acercad:AcercaD): Observable<any>{
//     return this.httpClient.put<any>(this.URL + `update/${id}`,acercad);
//   }

//   public delete(id: number): Observable<any>{
//     return this.httpClient.delete<any>(this.URL + `delete/${id}`);
//   }

// }
