import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectDTO } from '../../Model/DTO/object-dto';
import { ObjectService } from '../../ObjectService/object-service';

@Component({
  selector: 'app-object-add',
  templateUrl: './object-add.component.html',
  styleUrls: ['./object-add.component.css']
})
export class ObjectAddComponent implements OnInit {
  //@Input() cleardata: boolean = false;
  @Output() nameEvent = new EventEmitter<string>();
  objtempobj: ObjectDTO
  @Input() objemp: ObjectDTO = new ObjectDTO();;
  @ViewChild('closeBtn',null) cb: ElementRef;
  constructor(private objectservice: ObjectService, private route: Router) { }

  ngOnInit() {
  }
  Register(regForm: NgForm) {
    this.objtempobj = new ObjectDTO();
    this.objtempobj.value1 = regForm.value.value1;
    this.objtempobj.value2 = regForm.value.value2;

    this.objectservice.Add(this.objtempobj).subscribe(res => {
      alert("Object added successfully");
      this.TakeHome();
    }
    )
  }
  TakeHome() {
    this.nameEvent.emit("ccc");
    this.cb.nativeElement.click();
    this.route.navigateByUrl('');
  }
}

