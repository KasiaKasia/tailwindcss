import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingCheckboxComponent } from './sliding-checkbox.component';

describe('SlidingCheckboxComponent', () => {
  let component: SlidingCheckboxComponent;
  let fixture: ComponentFixture<SlidingCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidingCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
