import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolepermissionComponent } from './rolepermission/rolepermission.component';


const routes: Routes = [
  {
    path: 'rolepermission',
    component: RolepermissionComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
