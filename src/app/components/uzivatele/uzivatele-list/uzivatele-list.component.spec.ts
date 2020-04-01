import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzivateleListComponent } from './uzivatele-list.component';

describe('UzivateleListComponent', () => {
  let component: UzivateleListComponent;
  let fixture: ComponentFixture<UzivateleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzivateleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzivateleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
