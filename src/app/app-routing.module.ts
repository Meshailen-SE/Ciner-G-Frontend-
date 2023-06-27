import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TestEditComponent} from './test-edit/test-edit.component';
import { ProjectsComponent } from './projects/projects.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AccountsComponent } from './accounts/accounts.component';

import { ChartComponent } from './componenets/chart/chart.component';
import { CibaProjectsComponent } from './ciba-projects/ciba-projects.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [

  //Employee
  // { path: 'Employee', component: EmployeeListComponent},
  { path: "createEmployee", component: RegisterEmployeeComponent},
  { path: "updateEmployeeform/:id", component: EditEmployeeComponent},
  // { path: "testupdateEmployeeform/:id", component: TestEditComponent},
  // { path: 'Employee', component: TestEditComponent},
  { path: "EmpAccounts", component: ProjectsComponent},
  {path : "accounts", component:AccountsComponent},
  {path: "CibaProjects", component: CibaProjectsComponent},
  { path:"HumanResources", component:HumanResourcesComponent},
  // {path:"Dashboard", component:DashboardComponent},
  // {path: "uploadFiles", component: FileUploadComponent },
  //Workers
  // {path: "test/:id", component: TestEditComponent},
  // { path: 'Worker', component: Worker-detailsComponent},
  // { path: "createWorker", component: RegisterWorkerComponent},
  // { path: "updateWorkerform/:id", component: EditWorkerComponent},
  {path:"chart", component:ChartComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  //Documents
  // {path: "Documents",component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
