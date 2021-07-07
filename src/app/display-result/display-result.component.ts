import { Component, OnInit } from '@angular/core';
import { AmountObject } from '../home/amount-object';
import { SendQueryService } from '../send-query.service';
import { AmountReturnObject } from './amount-return-object';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  result: AmountReturnObject;
  isWithRates:boolean;

  constructor(private sendQueryService: SendQueryService) {
    this.result = {
      id : 0,
      inputPrincipal : 0,
      paypalToOuterChannelsCharges:0,
      mpesaCharges:0,
      companyCharges:0,
      localBankTransferCharges:0,
      intlBankToLocalBankCharges:0,
      amountToBeLoaded:0,
      exchangeRate:0
    }

    this.isWithRates = false;
   }

  ngOnInit(): void {
    //get result
    this.result = this.sendQueryService._ref;
    this.isWithRates = this.sendQueryService._with_rates;
    if(this.isWithRates == true) {
      this.result.exchangeRate =100;
      this.result.paypalToOuterChannelsCharges = this.result.paypalToOuterChannelsCharges/100;
      this.result.amountToBeLoaded = this.result.amountToBeLoaded/100;
    }

  }

}
