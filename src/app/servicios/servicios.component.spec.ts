import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SERVICIOSComponent } from './servicios.component';

describe('SERVICIOSComponent', () => {
  let component: SERVICIOSComponent;
  let fixture: ComponentFixture<SERVICIOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SERVICIOSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SERVICIOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
