import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputimageComponent } from './inputimage.component';

describe('InputimageComponent', () => {
  let component: InputimageComponent;
  let fixture: ComponentFixture<InputimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
