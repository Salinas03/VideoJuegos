import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVideoJuegoComponent } from './agregar-video-juego.component';

describe('AgregarVideoJuegoComponent', () => {
  let component: AgregarVideoJuegoComponent;
  let fixture: ComponentFixture<AgregarVideoJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarVideoJuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarVideoJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
