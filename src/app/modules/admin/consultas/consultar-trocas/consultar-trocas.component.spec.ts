import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTrocasComponent } from './consultar-trocas.component';

describe('ConsultarTrocasComponent', () => {
  let component: ConsultarTrocasComponent;
  let fixture: ComponentFixture<ConsultarTrocasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarTrocasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarTrocasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
