import { Observable } from 'rxjs';
import { ObjectDTO } from '../Model/DTO/object-dto';
import { ObjectBLO } from '../Model/BLL/object-blo';
import { Outunitresult } from '../Model/Viewmodel/outunitresult';
import { Injectable } from '@angular/core';

@Injectable()
export class ObjectService {

  constructor(public iObjectBLO: ObjectBLO){

  }

  public GetAll(){
    return this.iObjectBLO.getObject();
  }

  public Add(obj:Outunitresult){
    return this.iObjectBLO.addObject(obj);
  }

  public Edit(obj:ObjectDTO){
    return this.iObjectBLO.editObject(obj);
  }

  public Delete(obj:ObjectDTO){
    return this.iObjectBLO.deleteObject(obj);
  }
}
