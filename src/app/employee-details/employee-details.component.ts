import { Component, OnInit } from '@angular/core';
// import { WorkerServiceGuard } from '../services/worker-service.guard';
import { Worker } from '../model/worker';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

// import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  name = new FormControl('');
  // employeeService: any;
  

  closeAlert() {
    this.showAlert = false;
  }

  id:any;
  data:any;
  // id!: number;
  workers!: Worker[];
  showAlert = false;
  employees!: Employee[];

  employeeDetails = null as any;

  workerToUpdate = {
    employ_id:"",
    employ_name:"",
    employ_surname:"",
    employ_role:"",
    employ_team:"",
    employ_cellnumber:"",
    employ_email:"",
    employ_status:""

  }

  employeeToUpdate = {
    id:"",
    name:"",
    age:"",
    phone:"",
    address:"",
    status:"",
    startDate:"",
    team:"",
    previousIncrease:"",
    billingRate:"",

  }

  

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private route: ActivatedRoute,private fb: FormBuilder, private employeeService: EmployeeService) {
    // this.workerService.getWorkersList();
   }

  ngOnInit(){
    // this.id = (this.route.snapshot.params['id']);
    // this.getOne();
  }
  // edit(worker:any){
  //   this.workerToUpdate = worker;
  // }

  // getOne(){
  //   this.employeeService.getOne(this.id).subscribe(data=>{
  //     console.log(data);
  //     this.data=data;
  //   })
  // }


  updateEmployee(){
    // this.employeeService.updateEmployee(this.id,this.employeeToUpdate).subscribe((response) => {
    //       this.showAlert = true;
    //       console.log(response);
    //     });
  }
  // updateName() {
  //   this.name.setValue("Mesh");
  // }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'abc',
      lastName: '',
      address: {
        street: '123 Drew Street',
        city:'',
        state:'',
        zip:'',
      }
    });
  }

  updateEmployee1(){
    // this.employeeService.updateEmployee(this.id,this.workerToUpdate).subscribe((response) => {
    //       this.showAlert = true;
    //       console.log(response);
    //     });
  }
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  edit(employee:any){
    this.employeeToUpdate = employee;
  }

}
