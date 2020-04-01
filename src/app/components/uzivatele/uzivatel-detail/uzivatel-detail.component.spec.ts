import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzivatelDetailComponent } from './uzivatel-detail.component';

describe('UzivatelDetailComponent', () => {
  let component: UzivatelDetailComponent;
  let fixture: ComponentFixture<UzivatelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzivatelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzivatelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
