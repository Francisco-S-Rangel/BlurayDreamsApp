import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsuarioNotificacoesComponent } from './perfil-usuario-notificacoes.component';

describe('PerfilUsuarioNotificacoesComponent', () => {
  let component: PerfilUsuarioNotificacoesComponent;
  let fixture: ComponentFixture<PerfilUsuarioNotificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioNotificacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsuarioNotificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
