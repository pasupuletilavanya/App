import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  getUrl='http://localhost:3000/api/insertData';
  getUser(user):Observable<any>{
    return this.http.post(this.getUrl,user);
  }
  getloginUrl='http://localhost:3000/api/getData';
  getloginUser(user):Observable<any>{
    return this.http.post(this.getloginUrl,user);
  }
  private msgSource=new BehaviorSubject('');
   Msg=this.msgSource.asObservable();
   sendMsg(msg:string){
    this.msgSource.next(msg);
  }

}
