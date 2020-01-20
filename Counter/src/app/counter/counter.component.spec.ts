import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CounterComponent } from './counter.component';
import { of } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { Increment } from '../reducers/counter.actions';
const counter = 0;

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let mockStore: Store<{ count: number }>;
  const initialState = { count: 0 };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [CounterComponent],
      imports: [
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    mockStore = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('', () => {
    mockStore.dispatch(new Increment());
    component.counter$.subscribe(response => {
      console.log(response);
    })
  });
});
