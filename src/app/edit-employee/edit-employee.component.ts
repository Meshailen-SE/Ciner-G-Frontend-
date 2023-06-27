import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';
import { Worker } from '../model/worker';
import { Response } from '../response';
import { EmployeeService } from '../services/employee.service';
import {Router} from '@angular/router';
// import { WorkerServiceGuard } from '../services/worker-service.guard';
import { Validators } from '@angular/forms';
// import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  
  selectedFile!: string | Blob;
  title = 'Client_Matrix';
  testform!: FormGroup;
  formData: any;
  


  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    console.log(event);
  }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image',this.selectedFile);
  //   this.http.post("jdbc:postgresql://127.0.0.1:5432/employeematrixmanagementsystem/Documents/employ_Doc",fd,);
  //   reportProgress:true;
  //   observe:'events'
    
  // }
  // form!:FormGroup;

closeAlert() {
  this.showAlert = false;
}
  // employee: Employee = new Employee();
  // id: any;
  // employeelist:any;
  // isupdated = false;
  // currentEmployee: Employee={
  //   id: null,
  //   name: '',
  //   age: null,
  //   phone: '',
  //   address: '',
  //   status: undefined
  // };
  // showAlert = false;
  // currentIndex = -1;
  //Name: any;
   
  id!: number;
  employ_id!: bigint;
  employees!: Employee[];
  showAlert = false;
  editForm!:FormGroup;
  worker!:Worker[];
  employee = new Employee();
  currentEmployee!:any;
  // employees!: Employee[];
  employeeDetails = null as any;
  myValue = this.employee.name;
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

  ids=[];

  
  
  
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,private http:HttpClient,private fb: FormBuilder) { 
    //this.employeeDetails
    this.employeeService.getEmployeesList();
    // this.workerService.getWorkersList();
  }

  // editEmployee = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  //   phone: new FormControl(''),
  //   address: new FormControl(''),
  //   status: new FormControl('')

  // });
  profileForm = this.fb.group({
    firstName: [this.employeeToUpdate.name, Validators.required],
    lastName: [''],
    age:[''],
      phone:[''],
      address:[''],
      status:[''],

    // address: this.fb.group({
    //   street: [''],
    //   city: [''],
    //   state: [''],
    //   zip: ['']
    // }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  ngOnInit(){

    // this.employeeService.getEmployeesList().subscribe((response: Employee[]) => {
    //   this.employees = response;
    // });
    // this.testform= this.fb.group({
    //   id:[''],
    //   name:[''],
    //   age:[''],
    //   phone:[''],
    //   address:[''],
    //   status:[''],
    //   startDate:[''],
    //   team:[''],
    //   previousIncrease:[''],
    //   billingRate:[''],

    // })
  }

  

  // showForm(data: any){
  //   this.formData =data;
  //   this.testform.patchValue({
  //     id:data.id,
  //     name:data.name,
  //     age:data.age,
  //     phone:data.phone,
  //     address:data.address,
  //     status:data.status,
  //     startDate:data.startDate,
  //     team:data.team,
  //     previousIncrease:data.previousIncrease,
  //     billingRate:data.billingRate,


  //   })
  // }

  // updateUser(testform:any){
  //   let userData:any={};
  //   userData.id = testform.value.id;
  //   userData.name = testform.value.name;
  //   userData.age = testform.value.age;
  //   userData.phone = testform.value.phone;
  //   userData.address = testform.value.address;
  //   userData.status = testform.value.status;
  //   userData.startDate = testform.value.startDate;
  //   userData.team = testform.value.team;
  //   userData.previousIncrease = testform.value.previousIncrease;
  //   userData.billingRate = testform.value.billingRate;

    


  // }


  trackByFn(index: any, item: any) {
    return index;
   } 

  
  
  

  // updateEmployeeInformation(){
  //   this.profileForm.patchValue({
  //     id:this.employee.id,
  //     name: this.employee.name,
  //     age:this.employee.age,
  //     phone: this.employee.phone,
  //     address: this.employee.address,
  //     status: this.employee.status

  //   })
  // }


//   updateEmployeeInformation(): void{
//     this.profileForm.patchValue({
//       const data ={
//         id:this.employee.id,
//         name: this.employee.name,
//         age: this.employee.age,
//         phone: this.employee.phone,
//         address: this.employee.address,
//         status: this.employee.status
//       }
    
//   });
// }
  


    //console.log(this.route.snapshot.params['id']);
    // this.employeeService.getEmployee(this.route.snapshot.params['id']).subscribe((result: any)=>{
    // console.log(result);
      

    // this.editEmployee = new FormGroup({
    //   id: new FormControl(result['id']),
    //   name: new FormControl(result['name']),
    //   age: new FormControl(result['age']),
    //   phone: new FormControl(result['phone']),
    //   address: new FormControl(result['address']),
    //   status: new FormControl(result['status'])

    // });
    // });
    // this.employees();
    // this.ed 
    // this.workerService.getWorkersList().subscribe((response:Worker[])=> {
    //   this.worker = response;
    // })

    //  this.id = this.route.snapshot.params.id;
    //  this.employeeService.getEmployee(this.employee).subscribe((response: Response) => {
    //    this.employee = response.data;
    //  });
  

  // setCurrentEmployee(employee: Employee, index: number): void {
  //   this.employee = employee;
  //   this.currentIndex = index;
  // }
  edit(employee:any){
    this.employeeToUpdate = employee;
  }

  editEmployee(){
    this.employeeService.updateEmployee(this.employeeToUpdate).subscribe((response) => {
          this.showAlert = true;
          console.log(response);
        });
  }

  

  // createEmployee(){
  //   this.employeeService.createEmployee(Employee).subscribe((response) => {
  //     this.showAlert = true;
  //     console.log(response);
  //   });
  // }
  // readEmployee(): void {
  //   this.workerService.getWorkersList()
  //     .subscribe(
  //       data => {
  //         this.worker = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
  // }

  //for anchors with button locations 
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  

  // edit(employee:any){
  //   this.employeeToUpdate = employee;
  // }
  // getUrl():void{
  //   document.getElementById("demo").innerHTML = 
  //   "The full URL of this page is:<br>" + window.location.href;
  // }
  // updateEmployee() {
  //   this.employeeService.update(this.employeeToUpdate).subscribe((response) => {
  //     this.showAlert = true;
  //     console.log(response);
  //   });
  // }
  // closeAlert() {
  //   this.showAlert = false;
  // }

  
  

  // testUpdateEmployee(id:any){
  //   this.employeeService.getEmployee(id)
  //   .subscribe(data =>{
  //     this.employeeService.getEmployeesList=data;
  //   },
  //   error => console.log(error));
  // }

  //tests
  // updateEmployee1(id: number){
  //   this.employeeService.getEmployee(id)
  //     .subscribe(
  //       data => {
  //         this.employeelist=data           
  //       },
  //       error => console.log(error));
  // }

  // employeeUpdateForm = new FormGroup({
  //   id:new FormControl(),
  //   name:new FormControl(),
  //   age:new FormControl(),
  //   phone:new FormControl(),
  //   address:new FormControl(),
  //   status:new FormControl()
  // });


  // updateEmp(updateemp){
  //   this.employee = new Employee();
  //   this.employee.id = this.employee.id;
  //   this.employee.name = this.employee.name;
  //   this.employee.age = this.employee.age;
  //   this.employee.phone = this.employee.phone;
  //   this.employee.status = this.employee.status;
  //   console.log(this.employeelist);
     
  // }



}
