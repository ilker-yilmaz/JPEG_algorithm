import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharebuttonComponent } from './sharebutton.component';

describe('SharebuttonComponent', () => {
  let component: SharebuttonComponent;
  let fixture: ComponentFixture<SharebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
