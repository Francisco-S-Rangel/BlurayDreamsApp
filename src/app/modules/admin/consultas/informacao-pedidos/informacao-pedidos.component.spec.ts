import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoPedidosComponent } from './informacao-pedidos.component';

describe('InformacaoPedidosComponent', () => {
  let component: InformacaoPedidosComponent;
  let fixture: ComponentFixture<InformacaoPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
