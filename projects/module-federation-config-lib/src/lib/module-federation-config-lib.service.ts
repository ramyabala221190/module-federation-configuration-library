import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface configModel{
  env:string
}

@Injectable({
  providedIn: 'root'
})
export class ModuleFederationConfigLibService {

  constructor(private http:HttpClient) { }

  private appConfigurationList=new Map();

  getConfiguration(appName:string){
    return this.appConfigurationList.get(appName);
  }
  
  
  setConfiguration(path:string,appName:string):Observable<configModel>{
     return this.http.get(path).pipe(
      map((response:any)=>{
        this.appConfigurationList.set(appName,response);
        return response;
      })
     )
  }


}
