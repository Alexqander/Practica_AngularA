import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private myAppUrl = 'http://localhost:5097/api/Comment';

  constructor(private http: HttpClient) {}
  getComments(): Observable < any > {
      return this.http.get(this.myAppUrl);
  }
  getComment(id: number): Observable<any> {
      return this.http.get(this.myAppUrl + '/Show?id=' + id);
  }
  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + '/Destroy?id=' + id); 
  }
}
