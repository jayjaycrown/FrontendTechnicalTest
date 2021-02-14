import * as fromCreditCardPaymentStoreActions from './cardActions';
import * as fromCreditCardPaymentStoreEffects from './paymentStoreEffects';
// import * as fromCreditCardPaymentStoreSelectors from './selectors';
import * as fromCreditCardPaymentStoreReducer from './reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './reducer';
export {
    CreditCardPaymentStoreModule
} from './card-store.module';

export {
    fromCreditCardPaymentStoreActions,
    fromCreditCardPaymentStoreEffects,
    // fromCreditCardPaymentStoreSelectors,
    fromCreditCardPaymentStoreReducer
};

export const moduleFeatureKey = 'payment';

// tslint:disable-next-line: class-name
export interface paymentModuleState {
  [fromCreditCardPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.initialState,
};

export interface State {
  [moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(moduleFeatureKey, {
  factory: () => ({
    [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.reducer,
  })
});

