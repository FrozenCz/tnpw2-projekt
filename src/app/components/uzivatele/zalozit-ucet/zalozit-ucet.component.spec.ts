import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalozitUcetComponent } from './zalozit-ucet.component';

describe('ZalozitUcetComponent', () => {
  let component: ZalozitUcetComponent;
  let fixture: ComponentFixture<ZalozitUcetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalozitUcetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalozitUcetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
