import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRevenueMoviesComponent } from './top-revenue-movies.component';

describe('TopRevenueMoviesComponent', () => {
  let component: TopRevenueMoviesComponent;
  let fixture: ComponentFixture<TopRevenueMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRevenueMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRevenueMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
