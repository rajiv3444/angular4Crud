import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { PatientCrudService } from './patient-crud.service';
import { State } from "../models/state-model";

fdescribe('PatientCrudService', () => {
  let service: PatientCrudService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        BaseRequestOptions,
        PatientCrudService,
        MockBackend,
        Http,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
  });
  beforeEach(() => {
    backend = new MockBackend();
  });

  it('test#1 service should be created', inject([PatientCrudService], (service: PatientCrudService) => {
    expect(service).toBeTruthy();
  }));

  it('test#2 should be created', inject([PatientCrudService], (service: PatientCrudService) => {
    let states: State[];
    service.GetAllPatients().map(res => {
      this.states = res;
      expect(res.length).toEqual(2)
    });
  }));
  
  it('test#3 should be created', inject([PatientCrudService], (service: PatientCrudService) => {
    let states: State[];
    service.GetAllStates().map(res => {
      this.states = res;
      expect(this.states[0].name).toEqual("MH")
    });

  }));
});
