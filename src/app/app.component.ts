import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Question1';
  number = 0;
  datacol3: any;
  fibos: any = [];
  selected: any = 'isPrime';
  ngDoCheck() {
    this.number = Math.round(this.number);
    if (this.selected == 'isPrime') {
      this.datacol3 = this.isPrime(this.number);
    } else {
      this.datacol3 = this.checkfibonacci(this.number);
    }
  }
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      //input float
      if (charCode == 46) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
  isPrime(num: any) {
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }
  checkfibonacci(n: any) {
    let a = 0;
    let b = 1;
    if (n == a || n == b) return true;
    let c = a + b;
    while (c <= n) {
      if (c == n) return true;
      a = b;
      b = c;
      c = a + b;
    }
    return false;
  }
}
