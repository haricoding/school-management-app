import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { HomeComponent } from './home/home.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    TeacherdashboardComponent,
    StudentdashboardComponent,
    HomeComponent,
    EditcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
