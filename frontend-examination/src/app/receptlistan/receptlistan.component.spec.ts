import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptlistanComponent } from './receptlistan.component';

describe('ReceptlistanComponent', () => {
  let component: ReceptlistanComponent;
  let fixture: ComponentFixture<ReceptlistanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptlistanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptlistanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
