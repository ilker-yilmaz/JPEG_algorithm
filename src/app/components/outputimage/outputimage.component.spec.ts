import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputimageComponent } from './outputimage.component';

describe('OutputimageComponent', () => {
  let component: OutputimageComponent;
  let fixture: ComponentFixture<OutputimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
