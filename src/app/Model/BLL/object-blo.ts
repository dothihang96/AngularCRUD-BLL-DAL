import { ObjectDAO } from '../DAL/object-dao';
import { Outunitresult } from '../Viewmodel/outunitresult';
import { ObjectDTO } from '../DTO/object-dto';
import { Injectable } from '@angular/core';
import { InUnitResult } from '../Viewmodel/in-unit-result';
import { Observable } from 'rxjs';

@Injectable()
export class ObjectBLO {
  public _object: ObjectDTO;

  constructor(public iObjectDAO:ObjectDAO){

  }

  public getObject(){
    return this.iObjectDAO.GetObject();
  }

  public addObject(obj:Outunitresult){
    this._object = new ObjectDTO();
    this._object.value1 = obj.value1;
    this._object.value2 = obj.value2;
    return this.iObjectDAO.AddObject(this._object);
  }

  public editObject(obj:ObjectDTO){
    return this.iObjectDAO.EditObject(obj);
  }

  public deleteObject(obj:ObjectDTO){
    return this.iObjectDAO.DeleteObject(obj);
  }
}
