import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmountReturnObject } from './display-result/amount-return-object';
import { AmountObject } from './home/amount-object';

@Injectable({
  providedIn: 'root'
})
export class SendQueryService {

  urlNoExchangeRates = 'http://localhost:8080/api/withoutrate/';
  urlWithExchangeRates = 'http://localhost:8080/api/withrate/';
  public _ref: AmountReturnObject ;
  public _with_rates: boolean;

  constructor(private httpClient: HttpClient) { 
    this._ref = {
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

    this._with_rates = false;
  }

    sendPostWithoutExchangeRates(amountObject: AmountObject):Observable<AmountReturnObject>{
      this._with_rates = false;
      return this.httpClient.post<AmountReturnObject>(this.urlNoExchangeRates,amountObject);
    }

    sendPostWithExchangeRates(amountObject: AmountObject):Observable<AmountReturnObject>{
      this._with_rates = true;
      return this.httpClient.post<AmountReturnObject>(this.urlWithExchangeRates,amountObject);
    }

}
