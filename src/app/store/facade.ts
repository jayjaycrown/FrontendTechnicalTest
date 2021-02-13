import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/credit-card.interface';
import { load, payWithCard, payWithCardSuccess } from './actions';
import { CreditCardQuery } from './selectors';

@Injectable()
export class CreditCardPaymentFacade {
  readonly data$: Observable<CreditCard>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getCreditCardState));
  }

  // tslint:disable-next-line: typedef
  getCreditCardData() {
    this.store.dispatch(load());
  }

  // tslint:disable-next-line: typedef
  makePayment(paymentData: CreditCard) {
    this.store.dispatch(payWithCard({paymentData}));
  }

  // tslint:disable-next-line: typedef
  storeCard(creditCardData: { creditCardData: CreditCard; }) {
    this.store.dispatch(payWithCardSuccess(creditCardData));
  }
}
