import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparingSliderComponent } from './comparing-slider.component';

describe('ComparingSliderComponent', () => {
  let component: ComparingSliderComponent;
  let fixture: ComponentFixture<ComparingSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparingSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
