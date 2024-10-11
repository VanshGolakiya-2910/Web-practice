import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private secret_key : string = "key"
  constructor() {
   }
  encryptPassword(password : string) :string {
    return CryptoJS.AES.encrypt(password, this.secret_key).toString();
  }
  decryptPassword(password : string):string{
    return CryptoJS.AES.decrypt(password, this.secret_key).toString();
  }
  storePassword(password : string , key : string):void{
    const encryptedPassword = this.encryptPassword(password);
    localStorage.setItem(key, encryptedPassword);
  }
  getPassword():string{
    const decryptPassword = this.decryptPassword(localStorage.getItem('password')?.toString());
    return
  }
}