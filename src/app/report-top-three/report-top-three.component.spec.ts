import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTopThreeComponent } from './report-top-three.component';

describe('ReportTopThreeComponent', () => {
  let component: ReportTopThreeComponent;
  let fixture: ComponentFixture<ReportTopThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTopThreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportTopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
