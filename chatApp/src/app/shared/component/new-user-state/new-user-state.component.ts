import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

export interface DialogData {
  name: string;
  location: string;
}
@Component({
  selector: 'app-new-user-state',
  templateUrl: './new-user-state.component.html',
  styleUrls: ['./new-user-state.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class NewUserStateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewUserStateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
