import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TudocertoComponent } from './tudocerto.component';

describe('TudocertoComponent', () => {
  let component: TudocertoComponent;
  let fixture: ComponentFixture<TudocertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TudocertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TudocertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
