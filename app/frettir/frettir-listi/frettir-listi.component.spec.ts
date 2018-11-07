import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrettirListiComponent } from './frettir-listi.component';

describe('FrettirListiComponent', () => {
  let component: FrettirListiComponent;
  let fixture: ComponentFixture<FrettirListiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrettirListiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrettirListiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
