import { Injectable } from '@angular/core';
import { Patient } from '../models/patient-model';
import { State } from '../models/state-model';
import { City } from '../models/city-model';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PatientCrudService {
    url: string = "http://localhost:52206/api/";
    httpHeaders = new Headers();

    constructor(private http: Http) {

    }

    SavePatient(patient:Patient): Observable<any> {
        console.log('save service calling--');//     + patient.Name + '' + patient.DOB);
        return this.http.post(this.url + "SavePatient", patient, { headers: new Headers() })
            .map(resp => resp.json() as State[]);
    }

    GetAllPatients(): Observable<any> {
        return this.http.get(this.url + "GetAllPatients", { headers: new Headers() })
        .map(resp => resp.json() as Patient[]);
    }

    // GetAllStates2 = (): Promise<State[]> => {
    //     return this.http.get(this.url + 'getStates')
    //         .toPromise()
    //         .then(resp => resp.json().data as State[]);

    // }

    GetAllStates(): Observable<any> {
        return this.http.get(this.url + "GetStates", { headers: new Headers() })
            .map(resp => resp.json() as State[]);
    }

    GetCitiesForThisState(stateId: number): Observable<any> {
        return this.http.get(this.url + "GetCity?sid="+stateId, { headers: new Headers() })
        .map(resp => resp.json() as City[]);
    }

    AddPatient(patient: Patient) {
        return this.http.post("", { body: patient }, { headers: new Headers() });
    }



}
