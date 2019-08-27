import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectDTO } from '../../Model/DTO/object-dto';
import { ObjectService } from '../../ObjectService/object-service';

@Component({
  selector: 'app-object-update',
  templateUrl: './object-update.component.html',
  styleUrls: ['./object-update.component.css']
})
export class ObjectUpdateComponent implements OnInit {
  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn',null) cb: ElementRef;
  ngOnInit() {
  }
  @Input() reset:boolean = false;
  //@ViewChild('regForm',null) myForm: NgForm;
  @Input() isReset: boolean = false;
  //objtempobj:ObjectDTO;
  @Input() objemp :ObjectDTO=new ObjectDTO();

  constructor(private objectservice: ObjectService, private route: Router) { }

  EditObject(regForm:NgForm)
  {

    this.objectservice.Edit(this.objemp).subscribe(res=>
      {
      alert("Object updated successfully");
      this.nameEvent.emit("ccc");
      this.cb.nativeElement.click();
      this.route.navigateByUrl('');
      })
  }
}

