import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectUpdateComponent } from './Controller/object-update/object-update.component';
import { CrudComponent } from './Controller/crud/crud.component';
import { ObjectAddComponent } from './Controller/object-add/object-add.component';


const routes: Routes = [
  {path:'',component:CrudComponent},
  {path:'Update',component:ObjectUpdateComponent},
  {path:'Add',component:ObjectAddComponent},
  {path:'Home',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
