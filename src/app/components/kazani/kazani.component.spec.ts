import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazaniComponent } from './kazani.component';

describe('KazaniComponent', () => {
  let component: KazaniComponent;
  let fixture: ComponentFixture<KazaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
