import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariosadm } from './formulariosadm';

describe('Formulariosadm', () => {
  let component: Formulariosadm;
  let fixture: ComponentFixture<Formulariosadm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formulariosadm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formulariosadm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
