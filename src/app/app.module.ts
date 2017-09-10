import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { LoginComponent } from './login/login.component';

//services
import { AuthService } from './services/auth.service';
import { PatientCrudService } from './services/patient-crud.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    PatientCrudService],
  bootstrap: [PatientComponent]
})
export class StartupModule { }
