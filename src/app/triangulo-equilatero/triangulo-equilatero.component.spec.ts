import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrianguloEquilateroComponent } from './triangulo-equilatero.component';

describe('TrianguloEquilateroComponent', () => {
  let component: TrianguloEquilateroComponent;
  let fixture: ComponentFixture<TrianguloEquilateroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TrianguloEquilateroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloEquilateroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
