import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../reducers/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.counter$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }
  increment() {
    this.store.dispatch(new Increment());
  }
  decrement() {
    this.store.dispatch(new Decrement());
  }
  reset() {
    this.store.dispatch(new Reset());
  }

}
