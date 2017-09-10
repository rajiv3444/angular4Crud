import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//#
import { PatientComponent } from './patient.component';
import { PatientCrudService } from '../services/patient-crud.service';

//#
import { Http } from "@angular/http";
//import { MockBackend } from "@angular/http/testing";
import { DebugElement } from "@angular/core/core";


describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  //#
  let textDebugElement: DebugElement;
  let textElement: HTMLElement;
  let id:number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      providers: [PatientCrudService, Http]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //#
    //textDebugElement = fixture.debugElement.query(By.css("p"));
    // This is our <h2> element that contains the displayed text:
    //textElement = textDebugElement.nativeElement;
  });

  it('component should create', () => {
    expect(component).toBeTruthy();
  });
});
