import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIntervalWinsComponent } from './report-interval-wins.component';

describe('ReportIntervalWinsComponent', () => {
  let component: ReportIntervalWinsComponent;
  let fixture: ComponentFixture<ReportIntervalWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportIntervalWinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportIntervalWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
