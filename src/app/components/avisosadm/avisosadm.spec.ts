import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avisosadm } from './avisosadm';

describe('Avisosadm', () => {
  let component: Avisosadm;
  let fixture: ComponentFixture<Avisosadm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Avisosadm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Avisosadm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
