import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectService } from '../../ObjectService/object-service';
import { ObjectDTO } from '../../Model/DTO/object-dto';
import { ObjectAddComponent } from '../object-add/object-add.component';
import { ObjectUpdateComponent } from '../object-update/object-update.component';
import { InUnitResult } from '../../Model/Viewmodel/in-unit-result';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  objlist: ObjectDTO[];
  tempobj: ObjectDTO

  constructor(private objectservice: ObjectService, private route: Router) { }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {

    this.objectservice.GetAll().subscribe((tempdata) => {
      this.objlist = tempdata.result;
      console.log(this.objlist);
    }), err => {
        console.log(err);
      }

  }
  deleteconfirmation(newobj:ObjectDTO) {

    if (confirm("Are you sure you want to delete this ?")) {
      this.tempobj = new ObjectDTO();
      this.tempobj.id = newobj.id;
      this.objectservice.Delete(this.tempobj).subscribe(res => {
        alert("Deleted successfully !!!");
        this.LoadData();
      })
    }
  }

  @ViewChild('empadd',null) addcomponent: ObjectAddComponent
  @ViewChild("regForm",null) editcomponent: ObjectUpdateComponent



  loadAddnew() {
    this.addcomponent.objemp.value1 = ""
    this.addcomponent.objemp.value2 = ""

  }

  loadnewForm(newobj:ObjectDTO) {

    this.editcomponent.objemp.id= newobj.id;
    this.editcomponent.objemp.date= newobj.date;
    this.editcomponent.objemp.value1 = newobj.value1;
    this.editcomponent.objemp.value2 = newobj.value2;
    console.log("object",this.editcomponent.objemp);
 }

  RefreshData() {
    this.LoadData();
  }
}
