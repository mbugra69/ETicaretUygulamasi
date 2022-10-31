import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent{
constructor(private spinner: NgxSpinnerService){}

showSpinner(nameSpinnerType: SpinnerName)
{
  this.spinner.show(nameSpinnerType);
  setTimeout(()=>{
    this.hideSpinner(nameSpinnerType);
  },2000);
}
hideSpinner(nameSpinnerType : SpinnerName)
{
  this.spinner.hide(nameSpinnerType);
}
}

export enum SpinnerName
{
  BallSpinRotate = "spin1",
  BallPulse = "spin2",

}