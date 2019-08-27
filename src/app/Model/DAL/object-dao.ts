import { ObjectDTO } from '../DTO/object-dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { InUnitResult } from '../Viewmodel/in-unit-result';
import { ROOT_URL } from '../config';


@Injectable()
export class ObjectDAO {

  constructor(private http: HttpClient){

  }

  public GetObject(){
     return this.http.get<InUnitResult>(ROOT_URL+'/GetAll');
  }

  public AddObject(obj:ObjectDTO){
    const headers = new HttpHeaders().set('content-type','application/json');
    return this.http.post<ObjectDTO>(ROOT_URL+'/Post',obj,{headers});
  }

  public EditObject(obj:ObjectDTO){
    const headers = new HttpHeaders().set('content-type','application/json');
    return this.http.post<ObjectDTO>(ROOT_URL+'/Put',obj,{headers})
  }

  public DeleteObject(obj:ObjectDTO){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<ObjectDTO>(ROOT_URL + '/Delete' ,obj,{headers} )
  }
}
