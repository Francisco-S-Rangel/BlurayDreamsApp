import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoClienteComponent } from './informacao-cliente.component';

describe('InformacaoClienteComponent', () => {
  let component: InformacaoClienteComponent;
  let fixture: ComponentFixture<InformacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
