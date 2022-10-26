import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { NewUserStateComponent } from './shared/component/new-user-state/new-user-state.component';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})
export class AppComponent {
  title = 'chatApp';
  location!: string;
  name: string | undefined;
  constructor(
    public dialog : MatDialog
  ){
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(NewUserStateComponent,{
      data: {name: this.name, location: this.location}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
