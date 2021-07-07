import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AmountReturnObject } from '../display-result/amount-return-object';
import { AmountObject } from '../home/amount-object';
import { SendQueryService } from '../send-query.service';

@Component({
  selector: 'app-without-rates',
  templateUrl: './without-rates.component.html',
  styleUrls: ['./without-rates.component.css']
})
export class WithoutRatesComponent implements OnInit {

  queryForm: FormGroup;
  amountToQuery: AmountObject;
  amountToReturnObject: AmountReturnObject ;

  inputAmount = new FormControl('');
  
  constructor(private sendQueryService: SendQueryService,
    private routing: Router) { 
      this.queryForm = new FormGroup({
        inputAmount: this.inputAmount
      });

      this.amountToQuery ={
        id:0,
        amount:0
      }

      this.amountToReturnObject = {
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
    }

  ngOnInit(): void {
  }

  sendQuery(){
    this.amountToQuery.id = 1;
    this.amountToQuery.amount = this.queryForm.get('inputAmount')?.value;
    console.log(this.queryForm.get('inputAmount')?.value);

    this.sendQueryService.sendPostWithoutExchangeRates(this.amountToQuery)
      .subscribe(
        data=>{
          this.amountToReturnObject = data;
          this.sendQueryService._ref = this.amountToReturnObject;
          this.routing.navigateByUrl('display-result');
        },
        error=>{
          console.log('Error: '+error)
        }
      )
  }

}
