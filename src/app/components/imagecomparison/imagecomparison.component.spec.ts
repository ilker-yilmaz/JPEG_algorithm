import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecomparisonComponent } from './imagecomparison.component';

describe('ImagecomparisonComponent', () => {
  let component: ImagecomparisonComponent;
  let fixture: ComponentFixture<ImagecomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagecomparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
