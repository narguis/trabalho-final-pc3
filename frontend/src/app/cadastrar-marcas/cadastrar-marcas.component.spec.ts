import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMarcasComponent } from './cadastrar-marcas.component';

describe('CadastrarMarcasComponent', () => {
  let component: CadastrarMarcasComponent;
  let fixture: ComponentFixture<CadastrarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
