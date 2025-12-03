import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoinicialComponent } from './avaliacaoinicial.component';

describe('AvaliacaoinicialComponent', () => {
  let component: AvaliacaoinicialComponent;
  let fixture: ComponentFixture<AvaliacaoinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoinicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
