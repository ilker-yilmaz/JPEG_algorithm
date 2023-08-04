import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponent } from './drop.component';

describe('DropComponent', () => {
  let component: DropComponent;
  let fixture: ComponentFixture<DropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropComponent]
    });
    fixture = TestBed.createComponent(DropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
