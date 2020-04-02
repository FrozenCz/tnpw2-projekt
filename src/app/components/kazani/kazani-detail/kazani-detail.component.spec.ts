import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazaniDetailComponent } from './kazani-detail.component';

describe('KazaniDetailComponent', () => {
  let component: KazaniDetailComponent;
  let fixture: ComponentFixture<KazaniDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazaniDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazaniDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
