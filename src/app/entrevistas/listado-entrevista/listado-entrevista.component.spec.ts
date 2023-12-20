import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEntrevistaComponent } from './listado-entrevista.component';

describe('ListadoEntrevistaComponent', () => {
  let component: ListadoEntrevistaComponent;
  let fixture: ComponentFixture<ListadoEntrevistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoEntrevistaComponent]
    });
    fixture = TestBed.createComponent(ListadoEntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
