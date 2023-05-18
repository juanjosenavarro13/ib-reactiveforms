import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCompletoComponent } from './formulario-completo.component';

describe('FormularioCompletoComponent', () => {
  let component: FormularioCompletoComponent;
  let fixture: ComponentFixture<FormularioCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
