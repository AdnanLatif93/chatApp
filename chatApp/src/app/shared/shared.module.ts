import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserStateComponent } from './component/new-user-state/new-user-state.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    NewUserStateComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
    
  ],
  exports: [
    MatDialogModule,
    FormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
