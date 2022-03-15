import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoTrocaComponent } from './informacao-troca.component';

describe('InformacaoTrocaComponent', () => {
  let component: InformacaoTrocaComponent;
  let fixture: ComponentFixture<InformacaoTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoTrocaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacaoTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
