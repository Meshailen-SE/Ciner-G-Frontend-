import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content?: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err=> {
        this.content =JSON.parse(err.error).message;
      }
    );
  }
  // ngOnInit(): void {
  //   this.userService.getAdminBoard().subscribe({
  //     next: data => {
  //       this.content = data;
  //     },
  //     error: err => {console.log(err)
  //       if (err.error) {
  //         this.content = JSON.parse(err.error).message;
  //       } else {
  //         this.content = "Error with status: " + err.status;
  //       }
  //     }
  //   });
  // }
  // timesheet.component.js
 


}