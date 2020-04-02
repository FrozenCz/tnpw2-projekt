import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChvalyComponent } from './chvaly.component';

describe('ChvalyComponent', () => {
  let component: ChvalyComponent;
  let fixture: ComponentFixture<ChvalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChvalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChvalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
