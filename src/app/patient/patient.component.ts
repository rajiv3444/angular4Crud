import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient-model';
import { State } from '../models/state-model';
import { City } from '../models/city-model';
import { PatientCrudService } from '../services/patient-crud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  selectedStateId: number;
  selectedCityId:number;
  states: State[];
  cities: City[];
  allPatients: Patient[]=[];
  patient: Patient;

  constructor(private patientService: PatientCrudService) {
    this.selectedStateId = 0;
    this.selectedCityId = 0;
    this.patient = new Patient();
    //this.patient.Name = 'reajiv';   

  }

  ngOnInit() {
    //load all patients and show in grid
    //load states and fill dropdown
    this.FetchAllStates();
    this.FetchAllPatients();
  }

  Save()
  {
    this.patientService.SavePatient(this.patient)
    .subscribe((resp)=> {
      console.log('saved');
      this.FetchAllPatients();
    });
  }
  FetchAllPatients() {
    this.patientService.GetAllPatients()
      .subscribe((resp) => {
        console.log('patients: ' + resp);
        this.allPatients = resp;
      },
      err => { });
  }

  // FetchAllStates2():void {
  //   this.patientService.GetAllStates2().then(res => this.states = res);
  // }

  FetchAllStates():void {
    this.patientService.GetAllStates()
    .subscribe((resp)=> {
      console.log(resp);
      this.states = resp;
    });
  }

  FetchCitiesForThisState(selectedStateId) {
    this.patientService.GetCitiesForThisState(selectedStateId)
      .subscribe((resp) => {
        console.log('cities: ' + resp);
        this.cities = resp;
      },
      err => { });
  }

  OnStateChange(selectedStateId:number)
  {
    console.log('selectedStateId:: ' + selectedStateId);
    this.selectedCityId=0;
    this.FetchCitiesForThisState(selectedStateId);

  }

}
