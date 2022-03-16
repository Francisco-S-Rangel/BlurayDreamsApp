import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPesquisaComponent } from './tela-pesquisa.component';

describe('TelaPesquisaComponent', () => {
  let component: TelaPesquisaComponent;
  let fixture: ComponentFixture<TelaPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
