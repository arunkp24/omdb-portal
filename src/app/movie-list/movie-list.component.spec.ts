import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieListComponent } from './movie-list.component';
import { OmdbApiService } from '../services/omdb-api.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';


describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let service: OmdbApiService;
  const initialState  = '';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ MovieListComponent ],
      providers: [OmdbApiService, provideMockStore({ initialState })]
    })
    .compileComponents();
    service = TestBed.inject(OmdbApiService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
