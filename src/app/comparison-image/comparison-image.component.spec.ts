import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonImageComponent } from './comparison-image.component';

describe('ComparisonImageComponent', () => {
  let component: ComparisonImageComponent;
  let fixture: ComponentFixture<ComparisonImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonImageComponent]
    });
    fixture = TestBed.createComponent(ComparisonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
