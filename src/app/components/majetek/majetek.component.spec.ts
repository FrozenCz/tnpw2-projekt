import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajetekComponent } from './majetek.component';

describe('MajetekComponent', () => {
  let component: MajetekComponent;
  let fixture: ComponentFixture<MajetekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajetekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajetekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
