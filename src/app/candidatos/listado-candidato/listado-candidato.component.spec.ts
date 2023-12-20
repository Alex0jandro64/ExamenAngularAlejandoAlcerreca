import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCandidatoComponent } from './listado-candidato.component';

describe('ListadoCandidatoComponent', () => {
  let component: ListadoCandidatoComponent;
  let fixture: ComponentFixture<ListadoCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoCandidatoComponent]
    });
    fixture = TestBed.createComponent(ListadoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
