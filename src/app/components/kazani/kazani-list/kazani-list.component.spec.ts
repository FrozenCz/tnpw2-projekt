import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazaniListComponent } from './kazani-list.component';

describe('KazaniListComponent', () => {
  let component: KazaniListComponent;
  let fixture: ComponentFixture<KazaniListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazaniListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazaniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
