import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OveroviewComponent } from './overoview.component';

describe('OveroviewComponent', () => {
  let component: OveroviewComponent;
  let fixture: ComponentFixture<OveroviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OveroviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OveroviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
