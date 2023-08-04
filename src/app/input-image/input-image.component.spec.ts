import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageComponent } from './input-image.component';

describe('InputImageComponent', () => {
  let component: InputImageComponent;
  let fixture: ComponentFixture<InputImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputImageComponent]
    });
    fixture = TestBed.createComponent(InputImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
