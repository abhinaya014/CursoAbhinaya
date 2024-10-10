import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarcursoPage } from './agregarcurso.page';

describe('AgregarcursoPage', () => {
  let component: AgregarcursoPage;
  let fixture: ComponentFixture<AgregarcursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
