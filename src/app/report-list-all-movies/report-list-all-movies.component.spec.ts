import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListAllMoviesComponent } from './report-list-all-movies.component';

describe('ReportListAllMoviesComponent', () => {
  let component: ReportListAllMoviesComponent;
  let fixture: ComponentFixture<ReportListAllMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportListAllMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportListAllMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
