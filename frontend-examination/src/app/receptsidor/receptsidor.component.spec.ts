import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptsidorComponent } from './receptsidor.component';

describe('ReceptsidorComponent', () => {
  let component: ReceptsidorComponent;
  let fixture: ComponentFixture<ReceptsidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptsidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptsidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
