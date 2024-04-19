import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl="https://localhost:44375/api/User/";

  constructor(private httpClient:HttpClient) { }
  
  loginUser(data:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+'LoginMethod',data);
  }

  registerUser(data2:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+'register',data2);
  }

  postService(url:string,reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }

  postServiceReset(url:string,reqData:any,token:boolean=false,httpOptions:any={}){
    return this.httpClient.post(url,reqData,token&&httpOptions)
  }
  getService(url:string,token:boolean=true,httpOptions:any={}){
    return this.httpClient.get(url,token&&httpOptions)
  }
  putService(url:string,reqData:any,token:boolean=true,httpOptions:any={}){
    return this.httpClient.put(url,reqData,token&&httpOptions)
  }
  
}
