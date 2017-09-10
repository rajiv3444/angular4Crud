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


/*
web api controllers and models
-------------------------------
using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using patientApi.Models;

namespace patientApi.Controllers
{
   
    public class StateController : Controller
    {
        static List<Patient> patientsList = new List<Patient>();

        // GET: api/values
        [Route("api/GetStates")]
        [HttpGet]
        public IEnumerable<State> GetStates()
        {
            //return new string[] { "value1", "value2" };
            var state = new State();
            state.Id = 1;
            state.Name = "MH";
            var state2 = new State();
            state2.Id = 2;
            state2.Name = "GJ";
            State[] states = new State[] { state, state2 };
            return states;
        }

        // GET api/GetCitiesForState/5
        [Route("api/GetCity")]
        [HttpGet]
        public IEnumerable<City> GetCity(int sid)
        {
            List<City> cities = new List<City>();

            cities.Add(new City { Id = 1, Name = "pune", StateId = 1 });
            cities.Add(new City { Id = 2, Name = "mum", StateId = 1 });
            cities.Add(new City { Id = 3, Name = "ahmd", StateId = 2 });
            cities.Add(new City { Id = 4, Name = "baroda", StateId = 2 });

            return cities.Where(c=>c.StateId == sid).ToList();
        }

        // POST api/values
        [Route("api/SavePatient")]
        [HttpPost]
        public void Post([FromBody]Patient patient)
        {
            if (patient != null)
            {
                patientsList.Add(patient);
            }
        }

        [Route("api/GetAllPatients")]
        [HttpGet]
        public List<Patient> GetAllPatients()
        {
            //var pat = new Patient();
            //pat.Name = "test";
            //pat.DOB = DateTime.Now;
            //pat.Gender = "Male";
            //patientsList.Add(pat);
            return patientsList;

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
---------------------
Models
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace patientApi.Models
{
    public class State
    {
        public int Id { get; set; }
        public string Name{ get; set; }
    }
}
-------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace patientApi.Models
{
    public class Patient
    {
        //public int Id{ get; set; }
        public string Name{ get; set; }
        public DateTime DOB{ get; set; }
        public string Gender { get; set; }
    }
}
-----
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace patientApi.Models
{
    public class City
    {
        public int Id { get; set; }
        public int StateId { get; set; }
        public string Name{ get; set; }
    }
}

/*
