import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListMoviesByYearComponent } from './report-list-movies-by-year.component';

describe('ReportListMoviesByYearComponent', () => {
  let component: ReportListMoviesByYearComponent;
  let fixture: ComponentFixture<ReportListMoviesByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportListMoviesByYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportListMoviesByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
