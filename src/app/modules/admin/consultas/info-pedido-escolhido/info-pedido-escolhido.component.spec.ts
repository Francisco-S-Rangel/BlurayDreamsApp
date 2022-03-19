import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPedidoEscolhidoComponent } from './info-pedido-escolhido.component';

describe('InfoPedidoEscolhidoComponent', () => {
  let component: InfoPedidoEscolhidoComponent;
  let fixture: ComponentFixture<InfoPedidoEscolhidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPedidoEscolhidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPedidoEscolhidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
