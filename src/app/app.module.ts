import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EmployeeFilterPipePipe } from './employee-filter-pipe.pipe';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ChartComponent } from './componenets/chart/chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TestEditComponent } from './test-edit/test-edit.component';
import { RouterModule,Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
// import { NgChartsModule } from 'ng2-charts/public_api';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatSelectModule} from '@angular/material/select';
import { AccountsComponent } from './accounts/accounts.component';
import { FooComponent } from './foo/foo.component';
import { PoComponent } from './po/po.component';
import { CibaProjectsComponent } from './ciba-projects/ciba-projects.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { PayslipComponent } from './payslip/payslip.component';
import { ContractsComponent } from './contracts/contracts.component';
import { IssuesComponent } from './issues/issues.component';
import { ReportsComponent } from './reports/reports.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
// import { FusionChartsModule } from "angular-fusioncharts";

// import * as FusionCharts from "fusioncharts";
// import * as charts from "fusioncharts/fusioncharts.charts";
// import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {Payslip}
// import { HumanReasourcesComponent } from './human-resources/human-reasources.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgModule } from '@ng-boo';
const routes:Routes=[
  {path: 'updateEmployeeForm/:id', component:EditEmployeeComponent}
];

// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    RegisterEmployeeComponent,
    EmployeeFilterPipePipe,
    EmployeeDetailsComponent,
    FileUploadComponent,
    ChartComponent,
    PieChartComponent,
    LoginComponent,
    UserComponent,
    TestEditComponent,
    ProjectsComponent,
    PopUpComponent,
    AccountsComponent,
    FooComponent,
    PoComponent,
    CibaProjectsComponent,
    HumanResourcesComponent,
    PayslipComponent,
    ContractsComponent,
    IssuesComponent,
    ReportsComponent,
    // DashboardComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    // HumanReasourcesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatSelectModule,
    BrowserModule,
    // NgbModule,
    // NgChartsModule
  ],
  // providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
