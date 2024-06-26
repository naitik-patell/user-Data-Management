import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn() {
    // console.log("ISLOGGEDIN CALLED!!!!")
    const token = localStorage.getItem('jwtToken'); // get token from local storage

    if (token != null) {
      const payload = atob(token.split('.')[1]); // decode payload of token

      const parsedPayload = JSON.parse(payload); // convert payload into an Object

      return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    }

    return false;

  }

  isTokenValid(token:string|null){
    if (token != null) {
      const payload = atob(token.split('.')[1]); // decode payload of token

      const parsedPayload = JSON.parse(payload); // convert payload into an Object

      return parsedPayload.exp > Date.now() / 1000; // check if token is expired
    }

    return false;
  }
}
