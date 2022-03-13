import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFuncionarioComponent } from './tela-funcionario.component';

describe('TelaFuncionarioComponent', () => {
  let component: TelaFuncionarioComponent;
  let fixture: ComponentFixture<TelaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
