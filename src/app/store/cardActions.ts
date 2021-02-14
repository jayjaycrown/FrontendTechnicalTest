import { createAction, props } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.interface';

export enum CreditCardPaymentActionType {
  loadCreditCard = '[CreditCardPayment] Load',
  loadCardSuccess = '[CreditCardPayment] Load Success',
  REFRESH = '[CreditCardPayment] Refresh',
  payWithCard = '[CreditCardPayment] Pay',
  paymentSuccessful = '[CreditCardPayment] Payment Success',
  paymentError = '[CreditCardPayment] Submit Success'
}

export const load = createAction(CreditCardPaymentActionType.loadCreditCard);

export const loadSuccess = createAction(
  CreditCardPaymentActionType.loadCardSuccess,
  props<{ creditCardData: CreditCard }>()
);

export const payWithCard = createAction(
  CreditCardPaymentActionType.payWithCard,
  props<{ paymentData: CreditCard }>()
);

export const payWithCardSuccess = createAction(
  CreditCardPaymentActionType.paymentSuccessful,
  props<{ creditCardData: CreditCard }>()
);

export const payWithCardError = createAction(
  CreditCardPaymentActionType.paymentSuccessful,
  props<{ error: string }>()
);


export const refresh = createAction(CreditCardPaymentActionType.REFRESH);
