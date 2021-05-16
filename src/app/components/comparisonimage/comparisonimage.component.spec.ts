import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonimageComponent } from './comparisonimage.component';

describe('ComparisonimageComponent', () => {
  let component: ComparisonimageComponent;
  let fixture: ComponentFixture<ComparisonimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
