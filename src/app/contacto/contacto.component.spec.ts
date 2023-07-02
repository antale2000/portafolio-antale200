import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTOComponent } from './contacto.component';

describe('CONTACTOComponent', () => {
  let component: CONTACTOComponent;
  let fixture: ComponentFixture<CONTACTOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACTOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CONTACTOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
