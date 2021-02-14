import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs';
import { CreditCardPaymentStatus } from './store/cardInfo';
import { CreditCard } from './models/credit-card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fe-test-eddy';
  toasterConfig: ToasterConfig;
  creditCard$: Observable<CreditCard>;
  cardDetails: CreditCard;
  hidden: boolean;

  constructor(private router: Router, private creditCardPaymentFacade: CreditCardPaymentStatus) {

    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: false,
      positionClass: 'toast-top-full-width',
      timeout: 5000
    });
    this.creditCard$ = this.creditCardPaymentFacade.data$;
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.creditCard$.subscribe(data => {
      this.cardDetails = data;
      console.log(this.cardDetails);
      if (this.cardDetails.amount === 0) {
        this.hidden = true;
      }
      else {
        this.hidden = false;
      }
    });
  }


  // tslint:disable-next-line: typedef
  navigate(){
    this.router.navigate(['/payment']);
  }
}
