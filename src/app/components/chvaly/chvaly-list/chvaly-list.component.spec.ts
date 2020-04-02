import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChvalyListComponent } from './chvaly-list.component';

describe('ChvalyListComponent', () => {
  let component: ChvalyListComponent;
  let fixture: ComponentFixture<ChvalyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChvalyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChvalyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
