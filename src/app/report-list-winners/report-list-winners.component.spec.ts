import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListWinnersComponent } from './report-list-winners.component';

describe('ReportListWinnersComponent', () => {
  let component: ReportListWinnersComponent;
  let fixture: ComponentFixture<ReportListWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportListWinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportListWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
