import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarCartaoCreditoComponent } from './modal-editar-cartao-credito.component';

describe('ModalEditarCartaoCreditoComponent', () => {
  let component: ModalEditarCartaoCreditoComponent;
  let fixture: ComponentFixture<ModalEditarCartaoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarCartaoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarCartaoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
