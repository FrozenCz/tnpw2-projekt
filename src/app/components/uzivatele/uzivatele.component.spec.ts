import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzivateleComponent } from './uzivatele.component';

describe('UzivateleComponent', () => {
  let component: UzivateleComponent;
  let fixture: ComponentFixture<UzivateleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzivateleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzivateleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
