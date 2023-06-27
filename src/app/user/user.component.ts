import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, switchMap,of } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  emplist$: any;
  empdata$: any;
  refreshkey = new BehaviorSubject<boolean>(true);
  ngOnInit(): void {

    this.service.getEmployeesList().subscribe((result: any) => {
      this.emplist$ = result;
    });
    

    this.service.getEmployee('tester').toPromise().then((response: any) => {
      this.empdata$ = response;
      this.designationform = new FormGroup({
        code: new FormControl(this.empdata$.code),
        name: new FormControl(this.empdata$.name),
      });
    }).catch((error: any) => {

    }).finally(() => {

    });
  }

  designationform = new FormGroup({
    code: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
  });

  // SaveDes() {
  //   if (this.designationform.valid) {
  //     this.service.Save(this.designationform.value).subscribe((result: any) => {
  //       this.refreshkey.next(!this.refreshkey);
  //     });
  //   }
  // }



}
