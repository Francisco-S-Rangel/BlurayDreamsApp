import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaTrocaComponent } from './pesquisa-troca.component';

describe('PesquisaTrocaComponent', () => {
  let component: PesquisaTrocaComponent;
  let fixture: ComponentFixture<PesquisaTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaTrocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
