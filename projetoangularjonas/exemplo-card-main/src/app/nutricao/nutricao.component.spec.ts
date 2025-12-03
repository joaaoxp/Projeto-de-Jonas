import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutricaoComponent } from './nutricao.component';

describe('NutricaoComponent', () => {
  let component: NutricaoComponent;
  let fixture: ComponentFixture<NutricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
