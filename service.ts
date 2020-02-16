/* this is an example for service */
import { Injectable } from '@angular/core';

@Injectable() // this can act as an identifier but it's not necessarily present in all services. I'll get more information.
export class CryptoService {

  coins= [
    {id: 1, name: 'BTC'},
    {id: 2, name: 'XRP'}
  ];

  constructor() { }

  getMyItems()
  {
    return this.coins;
  }

}