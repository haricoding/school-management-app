import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { HomeComponent } from './home/home.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';

const routes: Routes = [
  // {path:'',redirectTo:'registration',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'teacher',component:TeacherdashboardComponent},
  {path:'student', component:StudentdashboardComponent},
  {path:'Home', component:HomeComponent},
  {path: '',redirectTo:'Home',pathMatch:'full'},
  {path:'edit/:i', component:EditcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
